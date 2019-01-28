/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';
import { parseTsconfig, CompilerHost, CachedFileLoader, FileCache, resolveNormalizedPath, UncachedFileLoader } from '@bazel/typescript';
import {
  Extractor,
  IExtractorConfig,
  IExtractorOptions,
  ExtractorValidationRulePolicy
} from '@microsoft/api-extractor';


export function runMain(
  entryPoint: string,
  dtsBundleOut?: string,
  apiReviewFolder?: string,
  acceptApiUpdates = false,
) {
  // const [parsedConfig, errors] = parseTsconfig(project);
  // if (errors && errors.length) {
  //   console.error(format(target, errors));
  //   process.exitCode = 0;

  //   return;
  // }
  const compilerOptions: ts.CompilerOptions = {
    rootDir: process.cwd(),
    outDir: ".temp",
    noEmit: true,
    rootDirs: [
      process.cwd()
    ],
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    lib: [
      'lib.es2017.full.d.ts'
    ]
  };

  const pkgJson = path.join(path.dirname(entryPoint), 'package.json');
  if (!fs.existsSync(pkgJson)) {
    // API extractor always requires a package.json
    // todo: maybe we should use the actual package.json ??
    fs.writeFileSync(pkgJson, JSON.stringify({
      "version": "0.0.0",
      "name": "GENERATED-BY-BAZEL"
    }));
  }

  // const compilerHostDelegate = ts.createCompilerHost(compilerOptions, true);
  // const fileLoader = new UncachedFileLoader();

  // const host = new CompilerHost([entryPoint], compilerOptions, {}, compilerHostDelegate, fileLoader, ts.resolveModuleName);

  // const { options: tsOptions, files: rootNames } = parsedConfig;
  // todo: add bazel resolutions stuff here
  const compilerProgram = ts.createProgram({
    rootNames: [
      entryPoint
    ],
    options: compilerOptions,
    //  host
  });

  const extractorOptions: IExtractorOptions = {
    localBuild: acceptApiUpdates,
    //@ts-ignore
    compilerProgram,
  };

  const extractorConfig: IExtractorConfig = {
    compiler: {
      configType: 'runtime',
    },
    project: {
      entryPointSourceFile: entryPoint,
    },
    apiReviewFile: {
      enabled: !!apiReviewFolder,
      apiReviewFolder: apiReviewFolder && path.resolve(apiReviewFolder),
    },
    apiJsonFile: {
      enabled: false,
    },
    policies: {
      namespaceSupport: 'permissive',
    },
    validationRules: {
      missingReleaseTags: ExtractorValidationRulePolicy.allow,
    },
    dtsRollup: {
      enabled: !!dtsBundleOut,
      publishFolder: dtsBundleOut && path.resolve(path.dirname(dtsBundleOut)),
      mainDtsRollupPath: dtsBundleOut && path.basename(dtsBundleOut),
    }
  };

  const extractor = new Extractor(extractorConfig, extractorOptions);

  if (!extractor.processProject()) {
    // an error has occurred
    process.exitCode = 0;
  }
}