import { InjectionToken } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BeforeActivateRoutes, Event, NavigationError, NavigationTrigger, RedirectRequest } from './events';
import { GuardResult, NavigationBehaviorOptions, QueryParamsHandling, RedirectCommand, Routes } from './models';
import { RouteReuseStrategy } from './route_reuse_strategy';
import { ActivatedRoute, RouterState, RouterStateSnapshot } from './router_state';
import type { Params } from './shared';
import { UrlTree } from './url_tree';
import { Checks } from './utils/preactivation';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Options that modify the `Router` URL.
 * Supply an object containing any of these properties to a `Router` navigation function to
 * control how the target URL should be constructed.
 *
 * @see {@link Router#navigate}
 * @see {@link Router#createUrlTree}
 * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
 *
 * @publicApi
 */
export interface UrlCreationOptions {
    /**
     * Specifies a root URI to use for relative navigation.
     *
     * For example, consider the following route configuration where the parent route
     * has two children.
     *
     * ```
     * [{
     *   path: 'parent',
     *   component: ParentComponent,
     *   children: [{
     *     path: 'list',
     *     component: ListComponent
     *   },{
     *     path: 'child',
     *     component: ChildComponent
     *   }]
     * }]
     * ```
     *
     * The following `go()` function navigates to the `list` route by
     * interpreting the destination URI as relative to the activated `child`  route
     *
     * ```ts
     *  @Component({...})
     *  class ChildComponent {
     *    constructor(private router: Router, private route: ActivatedRoute) {}
     *
     *    go() {
     *      router.navigate(['../list'], { relativeTo: this.route });
     *    }
     *  }
     * ```
     *
     * A value of `null` or `undefined` indicates that the navigation commands should be applied
     * relative to the root.
     */
    relativeTo?: ActivatedRoute | null;
    /**
     * Sets query parameters to the URL.
     *
     * ```
     * // Navigate to /results?page=1
     * router.navigate(['/results'], { queryParams: { page: 1 } });
     * ```
     */
    queryParams?: Params | null;
    /**
     * Sets the hash fragment for the URL.
     *
     * ```
     * // Navigate to /results#top
     * router.navigate(['/results'], { fragment: 'top' });
     * ```
     */
    fragment?: string;
    /**
     * How to handle query parameters in the router link for the next navigation.
     * One of:
     * * `preserve` : Preserve current parameters.
     * * `merge` : Merge new with current parameters.
     *
     * The "preserve" option discards any new query params:
     * ```
     * // from /view1?page=1 to/view2?page=1
     * router.navigate(['/view2'], { queryParams: { page: 2 },  queryParamsHandling: "preserve"
     * });
     * ```
     * The "merge" option appends new query params to the params from the current URL:
     * ```
     * // from /view1?page=1 to/view2?page=1&otherKey=2
     * router.navigate(['/view2'], { queryParams: { otherKey: 2 },  queryParamsHandling: "merge"
     * });
     * ```
     * In case of a key collision between current parameters and those in the `queryParams` object,
     * the new value is used.
     *
     */
    queryParamsHandling?: QueryParamsHandling | null;
    /**
     * When true, preserves the URL fragment for the next navigation
     *
     * ```
     * // Preserve fragment from /results#top to /view#top
     * router.navigate(['/view'], { preserveFragment: true });
     * ```
     */
    preserveFragment?: boolean;
}
/**
 * @description
 *
 * Options that modify the `Router` navigation strategy.
 * Supply an object containing any of these properties to a `Router` navigation function to
 * control how the target URL should be constructed or interpreted.
 *
 * @see {@link Router#navigate}
 * @see {@link Router#navigateByUrl}
 * @see {@link Router#createurltree}
 * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
 * @see {@link UrlCreationOptions}
 * @see {@link NavigationBehaviorOptions}
 *
 * @publicApi
 */
export interface NavigationExtras extends UrlCreationOptions, NavigationBehaviorOptions {
}
export type RestoredState = {
    [k: string]: any;
    navigationId: number;
    ɵrouterPageId?: number;
};
/**
 * Information about a navigation operation.
 * Retrieve the most recent navigation object with the
 * [Router.getCurrentNavigation() method](api/router/Router#getcurrentnavigation) .
 *
 * * *id* : The unique identifier of the current navigation.
 * * *initialUrl* : The target URL passed into the `Router#navigateByUrl()` call before navigation.
 * This is the value before the router has parsed or applied redirects to it.
 * * *extractedUrl* : The initial target URL after being parsed with `UrlSerializer.extract()`.
 * * *finalUrl* : The extracted URL after redirects have been applied.
 * This URL may not be available immediately, therefore this property can be `undefined`.
 * It is guaranteed to be set after the `RoutesRecognized` event fires.
 * * *trigger* : Identifies how this navigation was triggered.
 * -- 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
 * -- 'popstate'--Triggered by a popstate event.
 * -- 'hashchange'--Triggered by a hashchange event.
 * * *extras* : A `NavigationExtras` options object that controlled the strategy used for this
 * navigation.
 * * *previousNavigation* : The previously successful `Navigation` object. Only one previous
 * navigation is available, therefore this previous `Navigation` object has a `null` value for its
 * own `previousNavigation`.
 *
 * @publicApi
 */
export interface Navigation {
    /**
     * The unique identifier of the current navigation.
     */
    id: number;
    /**
     * The target URL passed into the `Router#navigateByUrl()` call before navigation. This is
     * the value before the router has parsed or applied redirects to it.
     */
    initialUrl: UrlTree;
    /**
     * The initial target URL after being parsed with `UrlHandlingStrategy.extract()`.
     */
    extractedUrl: UrlTree;
    /**
     * The extracted URL after redirects have been applied.
     * This URL may not be available immediately, therefore this property can be `undefined`.
     * It is guaranteed to be set after the `RoutesRecognized` event fires.
     */
    finalUrl?: UrlTree;
    /**
     * Identifies how this navigation was triggered.
     *
     * * 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
     * * 'popstate'--Triggered by a popstate event.
     * * 'hashchange'--Triggered by a hashchange event.
     */
    trigger: 'imperative' | 'popstate' | 'hashchange';
    /**
     * Options that controlled the strategy used for this navigation.
     * See `NavigationExtras`.
     */
    extras: NavigationExtras;
    /**
     * The previously successful `Navigation` object. Only one previous navigation
     * is available, therefore this previous `Navigation` object has a `null` value
     * for its own `previousNavigation`.
     */
    previousNavigation: Navigation | null;
}
export interface NavigationTransition {
    id: number;
    currentUrlTree: UrlTree;
    extractedUrl: UrlTree;
    currentRawUrl: UrlTree;
    urlAfterRedirects?: UrlTree;
    rawUrl: UrlTree;
    extras: NavigationExtras;
    resolve: (value: boolean | PromiseLike<boolean>) => void;
    reject: (reason?: any) => void;
    promise: Promise<boolean>;
    source: NavigationTrigger;
    restoredState: RestoredState | null;
    currentSnapshot: RouterStateSnapshot;
    targetSnapshot: RouterStateSnapshot | null;
    currentRouterState: RouterState;
    targetRouterState: RouterState | null;
    guards: Checks;
    guardsResult: GuardResult | null;
}
/**
 * The interface from the Router needed by the transitions. Used to avoid a circular dependency on
 * Router. This interface should be whittled down with future refactors. For example, we do not need
 * to get `UrlSerializer` from the Router. We can instead inject it in `NavigationTransitions`
 * directly.
 */
interface InternalRouterInterface {
    config: Routes;
    navigated: boolean;
    routeReuseStrategy: RouteReuseStrategy;
    onSameUrlNavigation: 'reload' | 'ignore';
}
export declare const NAVIGATION_ERROR_HANDLER: InjectionToken<(error: NavigationError) => unknown | RedirectCommand>;
export declare class NavigationTransitions {
    currentNavigation: Navigation | null;
    currentTransition: NavigationTransition | null;
    lastSuccessfulNavigation: Navigation | null;
    /**
     * These events are used to communicate back to the Router about the state of the transition. The
     * Router wants to respond to these events in various ways. Because the `NavigationTransition`
     * class is not public, this event subject is not publicly exposed.
     */
    readonly events: Subject<BeforeActivateRoutes | RedirectRequest | Event>;
    /**
     * Used to abort the current transition with an error.
     */
    readonly transitionAbortSubject: Subject<Error>;
    private readonly configLoader;
    private readonly environmentInjector;
    private readonly destroyRef;
    private readonly urlSerializer;
    private readonly rootContexts;
    private readonly location;
    private readonly inputBindingEnabled;
    private readonly titleStrategy?;
    private readonly options;
    private readonly paramsInheritanceStrategy;
    private readonly urlHandlingStrategy;
    private readonly createViewTransition;
    private readonly navigationErrorHandler;
    navigationId: number;
    get hasRequestedNavigation(): boolean;
    private transitions?;
    private destroyed;
    constructor();
    complete(): void;
    handleNavigationRequest(request: Pick<NavigationTransition, 'source' | 'restoredState' | 'currentUrlTree' | 'currentRawUrl' | 'rawUrl' | 'extras' | 'resolve' | 'reject' | 'promise' | 'currentSnapshot' | 'currentRouterState'>): void;
    setupNavigations(router: InternalRouterInterface, initialUrlTree: UrlTree, initialRouterState: RouterState): Observable<NavigationTransition>;
    private cancelNavigationTransition;
    /**
     * @returns Whether we're navigating to somewhere that is not what the Router is
     * currently set to.
     */
    private isUpdatingInternalState;
    /**
     * @returns Whether we're updating the browser URL to something new (navigation is going
     * to somewhere not displayed in the URL bar and we will update the URL
     * bar if navigation succeeds).
     */
    private isUpdatedBrowserUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationTransitions, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationTransitions>;
}
export declare function isBrowserTriggeredNavigation(source: NavigationTrigger): source is "popstate" | "hashchange";
export {};
