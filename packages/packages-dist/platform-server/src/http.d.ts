/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { XhrFactory } from '@angular/common';
import { Provider } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ServerXhr implements XhrFactory {
    private xhrImpl;
    private ɵloadImpl;
    build(): XMLHttpRequest;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerXhr, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServerXhr>;
}
export declare const SERVER_HTTP_PROVIDERS: Provider[];
