/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export * from './private_export';
export { VERSION } from './version';
export { JitCompilerFactory } from './compiler_factory';
/**
 * @publicApi
 */
export declare const platformBrowserDynamic: (extraProviders?: import("@angular/core").StaticProvider[]) => import("@angular/core").PlatformRef;
