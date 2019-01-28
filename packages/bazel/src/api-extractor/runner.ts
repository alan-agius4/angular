/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as fs from 'fs';
import { runMain } from './index';

const DEBUG = false;

if (DEBUG) {
  console.error(`
api-extractor: running with
  cwd: ${process.cwd()}
  argv: ${process.argv}
`);
}

// Entry point
if (require.main === module) {
  const paramFilePath = process.argv.slice(2)[0];
  const params = fs.readFileSync(paramFilePath, 'utf-8')
    .split('\n')
    .filter(x => !x.startsWith('--'));

  if (DEBUG) {
    console.error(`api-extractor: running with params ${params}`);
  }

  const [entryPoint, dtsBundleOut] = params;
  runMain(entryPoint, dtsBundleOut);
}
