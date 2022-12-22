import {execSync} from 'node:child_process';
import {readFile, writeFile, mkdtemp, realpath, rm, rename} from 'node:fs/promises';
import {tmpdir} from 'os';
import {get} from 'node:https';
import {dirname, resolve as resolvePath, posix, join} from 'node:path';
import {fileURLToPath, parse} from 'node:url';

const GITHUB_API = 'https://api.github.com/repos/';
const CLI_BUILDS_REPO = 'angular/cli-builds';
const GITHUB_API_CLI_BUILDS = posix.join(GITHUB_API, CLI_BUILDS_REPO);

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI_HELP_CONTENT_PATH = resolvePath(__dirname, '../../content/cli/help');
const CLI_SHA_PATH = join(CLI_HELP_CONTENT_PATH, 'build-info.json');

async function main() {
  const branch = 'main';
  const {sha: currentSha} = JSON.parse(await readFile(CLI_SHA_PATH, 'utf-8'));
  const latestSha = await getShaFromCliBuilds(branch);
  const affectedFiles = await getAffectedFiles(currentSha, latestSha);

  if (!affectedFiles.filter((file) => file.startsWith('help/'))) {
    console.log`No 'help/**' files changed between ${currentSha} and ${latestSha}.`;

    return;
  }

  const temporaryDir = realpath(await mkdtemp(join(tmpdir(), 'cli-src-')));
  execSync('git init', {cwd: temporaryDir});
  execSync('git remote add origin git@github.com:angular/cli-builds.git', {cwd: temporaryDir});
  execSync(`git fetch origin`, {cwd: temporaryDir});
  execSync('git reset --hard FETCH_HEAD', {cwd: temporaryDir});

  // Delete current contents
  await rm(CLI_HELP_CONTENT_PATH, {recursive: true, force: true});

  // Move Help contents
  await rename(temporaryDir, CLI_HELP_CONTENT_PATH);

  const {version} = JSON.parse(await readFile(join(temporaryDir, 'package.json'), 'utf-8'));

  // Write SHA to file.
  await writeFile(
    CLI_SHA_PATH,
    JSON.stringify(
      {
        sha: latestSha,
        version,
      },
      undefined,
      2
    )
  );

  console.log(`Successfully updated help files in '${CLI_HELP_CONTENT_PATH}'.\n`);
}

/**
 * Get SHA of a branch.
 *
 * @param {string} branch
 * @param {string} headSha
 * @returns Promise<string>
 */
async function getShaFromCliBuilds(branch) {
  const headers = {Accept: 'application/vnd.github.VERSION.sha'};

  const sha = httpGet(posix.join(GITHUB_API_CLI_BUILDS, `/commits/${branch}`, {headers}));
  if (!sha) {
    throw new Error(`Unable to extract the SHA for '${branch}'.`);
  }

  return sha;
}

/**
 * Get the affected files.
 *
 * @param {string} baseSha
 * @param {string} headSha
 * @returns Promise<string[]>
 */
async function getAffectedFiles(baseSha, headSha) {
  const headers = {Accept: 'application/vnd.github.VERSION.sha'};
  const {files} = await httpGet(
    posix.join(GITHUB_API_CLI_BUILDS, `/compare/${baseSha}...${headSha}`, {headers})
  );

  return files.map((f) => f.filename);
}

function httpGet(url, options = {}) {
  const token = process.env.GITHUB_TOKEN;
  options.headers ??= {};
  options.headers['Authorization'] = token && `token ${token}`;
  // User agent is required
  // https://docs.github.com/en/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#user-agent-required
  options.headers['User-Agent'] = `AIO_Angular_CLI_Sources_Update_CHECK`;

  const parsedUrl = typeof url === 'string' ? parse(url) : url;

  return new Promise((resolve, reject) => {
    get({...parsedUrl, ...requestHeaders, ...options}, (res) => {
      res.on('data', (d) => {
        resolve(d);
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
