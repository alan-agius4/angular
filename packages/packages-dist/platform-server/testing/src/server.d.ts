import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser-dynamic/testing";
/**
 * Platform for testing
 *
 * @publicApi
 */
export declare const platformServerTesting: (extraProviders?: import("@angular/core").StaticProvider[]) => import("@angular/core").PlatformRef;
/**
 * NgModule for testing.
 *
 * @publicApi
 */
export declare class ServerTestingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerTestingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ServerTestingModule, never, never, [typeof i1.BrowserDynamicTestingModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ServerTestingModule>;
}
