import { ComponentRef, InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import { Routes } from './models';
import { Router } from './router';
import { ExtraOptions } from './router_config';
import * as i0 from "@angular/core";
import * as i1 from "./directives/router_outlet";
import * as i2 from "./directives/router_link";
import * as i3 from "./directives/router_link_active";
import * as i4 from "./components/empty_outlet";
/**
 * @docsNotRequired
 */
export declare const ROUTER_FORROOT_GUARD: InjectionToken<void>;
export declare const ROUTER_PROVIDERS: Provider[];
/**
 * @description
 *
 * Adds directives and providers for in-app navigation among views defined in an application.
 * Use the Angular `Router` service to declaratively specify application states and manage state
 * transitions.
 *
 * You can import this NgModule multiple times, once for each lazy-loaded bundle.
 * However, only one `Router` service can be active.
 * To ensure this, there are two ways to register routes when importing this module:
 *
 * * The `forRoot()` method creates an `NgModule` that contains all the directives, the given
 * routes, and the `Router` service itself.
 * * The `forChild()` method creates an `NgModule` that contains all the directives and the given
 * routes, but does not include the `Router` service.
 *
 * @see [Routing and Navigation guide](guide/routing/common-router-tasks) for an
 * overview of how the `Router` service should be used.
 *
 * @publicApi
 */
export declare class RouterModule {
    constructor();
    /**
     * Creates and configures a module with all the router providers and directives.
     * Optionally sets up an application listener to perform an initial navigation.
     *
     * When registering the NgModule at the root, import as follows:
     *
     * ```ts
     * @NgModule({
     *   imports: [RouterModule.forRoot(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @param routes An array of `Route` objects that define the navigation paths for the application.
     * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
     * @return The new `NgModule`.
     *
     */
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule>;
    /**
     * Creates a module with all the router directives and a provider registering routes,
     * without creating a new Router service.
     * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
     *
     * ```ts
     * @NgModule({
     *   imports: [RouterModule.forChild(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @param routes An array of `Route` objects that define the navigation paths for the submodule.
     * @return The new NgModule.
     *
     */
    static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RouterModule, never, [typeof i1.RouterOutlet, typeof i2.RouterLink, typeof i3.RouterLinkActive, typeof i4.ɵEmptyOutletComponent], [typeof i1.RouterOutlet, typeof i2.RouterLink, typeof i3.RouterLinkActive, typeof i4.ɵEmptyOutletComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RouterModule>;
}
/**
 * For internal use by `RouterModule` only. Note that this differs from `withInMemoryRouterScroller`
 * because it reads from the `ExtraOptions` which should not be used in the standalone world.
 */
export declare function provideRouterScroller(): Provider;
export declare function provideForRootGuard(router: Router): any;
/**
 * A DI token for the router initializer that
 * is called after the app is bootstrapped.
 *
 * @publicApi
 */
export declare const ROUTER_INITIALIZER: InjectionToken<(compRef: ComponentRef<any>) => void>;
