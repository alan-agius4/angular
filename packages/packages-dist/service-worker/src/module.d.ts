/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ModuleWithProviders } from '@angular/core';
import { SwRegistrationOptions } from './provider';
import * as i0 from "@angular/core";
/**
 * @publicApi
 */
export declare class ServiceWorkerModule {
    /**
     * Register the given Angular Service Worker script.
     *
     * If `enabled` is set to `false` in the given options, the module will behave as if service
     * workers are not supported by the browser, and the service worker will not be registered.
     */
    static register(script: string, options?: SwRegistrationOptions): ModuleWithProviders<ServiceWorkerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServiceWorkerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ServiceWorkerModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ServiceWorkerModule>;
}
