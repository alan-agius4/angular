import { PlatformRef, Provider, StaticProvider } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export declare const INTERNAL_SERVER_PLATFORM_PROVIDERS: StaticProvider[];
export declare const SERVER_RENDER_PROVIDERS: Provider[];
export declare const PLATFORM_SERVER_PROVIDERS: Provider[];
/**
 * The ng module for the server.
 *
 * @publicApi
 */
export declare class ServerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ServerModule, never, never, [typeof i1.BrowserModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ServerModule>;
}
/**
 * @publicApi
 */
export declare function platformServer(extraProviders?: StaticProvider[] | undefined): PlatformRef;
