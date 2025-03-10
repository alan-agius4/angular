/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ApplicationRef, InjectionToken, Provider, StaticProvider, Type } from '@angular/core';
/**
 * Event dispatch (JSAction) script is inlined into the HTML by the build
 * process to avoid extra blocking request on a page. The script looks like this:
 * ```html
 * <script type="text/javascript" id="ng-event-dispatch-contract">...</script>
 * ```
 * This const represents the "id" attribute value.
 */
export declare const EVENT_DISPATCH_SCRIPT_ID = "ng-event-dispatch-contract";
/**
 * An internal token that allows providing extra information about the server context
 * (e.g. whether SSR or SSG was used). The value is a string and characters other
 * than [a-zA-Z0-9\-] are removed. See the default value in `DEFAULT_SERVER_CONTEXT` const.
 */
export declare const SERVER_CONTEXT: InjectionToken<string>;
/**
 * Bootstraps an application using provided NgModule and serializes the page content to string.
 *
 * @param moduleType A reference to an NgModule that should be used for bootstrap.
 * @param options Additional configuration for the render operation:
 *  - `document` - the document of the page to render, either as an HTML string or
 *                 as a reference to the `document` instance.
 *  - `url` - the URL for the current render request.
 *  - `extraProviders` - set of platform level providers for the current render request.
 *
 * @publicApi
 */
export declare function renderModule<T>(moduleType: Type<T>, options: {
    document?: string | Document;
    url?: string;
    extraProviders?: StaticProvider[];
}): Promise<string>;
/**
 * Bootstraps an instance of an Angular application and renders it to a string.

 * ```ts
 * const bootstrap = () => bootstrapApplication(RootComponent, appConfig);
 * const output: string = await renderApplication(bootstrap);
 * ```
 *
 * @param bootstrap A method that when invoked returns a promise that returns an `ApplicationRef`
 *     instance once resolved.
 * @param options Additional configuration for the render operation:
 *  - `document` - the document of the page to render, either as an HTML string or
 *                 as a reference to the `document` instance.
 *  - `url` - the URL for the current render request.
 *  - `platformProviders` - the platform level providers for the current render request.
 *
 * @returns A Promise, that returns serialized (to a string) rendered page, once resolved.
 *
 * @publicApi
 */
export declare function renderApplication<T>(bootstrap: () => Promise<ApplicationRef>, options: {
    document?: string | Document;
    url?: string;
    platformProviders?: Provider[];
}): Promise<string>;
