module.exports = {
  branchPrefix: 'ng-renovate/',
  platform: 'github',
  branchNameStrict: true,
  // Renovate fork PRs should never be editable as Renovate would otherwise
  // not be able to delete the branches and future updates would be missed.
  forkModeDisallowMaintainerEdits: true,
  onboarding: false,
  forkProcessing: 'enabled',
  persistRepoData: true,
  allowedPostUpgradeCommands: ['.', '^yarn install$', '^yarn update-generated-files$'],
  repositories: ['alan-agius4/angular'],
  hostRules: [
    {
      matchHost: 'api.github.com',
      concurrentRequestLimit: 1,
    },
  ],
};
