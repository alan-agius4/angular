import { SubscriptionLike } from 'rxjs';
import { Event, PrivateRouterEvents } from '../events';
import { Navigation, RestoredState } from '../navigation_transition';
import { RouterState } from '../router_state';
import { UrlTree } from '../url_tree';
import * as i0 from "@angular/core";
export declare abstract class StateManager {
    /**
     * Returns the currently activated `UrlTree`.
     *
     * This `UrlTree` shows only URLs that the `Router` is configured to handle (through
     * `UrlHandlingStrategy`).
     *
     * The value is set after finding the route config tree to activate but before activating the
     * route.
     */
    abstract getCurrentUrlTree(): UrlTree;
    /**
     * Returns a `UrlTree` that is represents what the browser is actually showing.
     *
     * In the life of a navigation transition:
     * 1. When a navigation begins, the raw `UrlTree` is updated to the full URL that's being
     * navigated to.
     * 2. During a navigation, redirects are applied, which might only apply to _part_ of the URL (due
     * to `UrlHandlingStrategy`).
     * 3. Just before activation, the raw `UrlTree` is updated to include the redirects on top of the
     * original raw URL.
     *
     * Note that this is _only_ here to support `UrlHandlingStrategy.extract` and
     * `UrlHandlingStrategy.shouldProcessUrl`. Without those APIs, the current `UrlTree` would not
     * deviated from the raw `UrlTree`.
     *
     * For `extract`, a raw `UrlTree` is needed because `extract` may only return part
     * of the navigation URL. Thus, the current `UrlTree` may only represent _part_ of the browser
     * URL. When a navigation gets cancelled and the router needs to reset the URL or a new navigation
     * occurs, it needs to know the _whole_ browser URL, not just the part handled by
     * `UrlHandlingStrategy`.
     * For `shouldProcessUrl`, when the return is `false`, the router ignores the navigation but
     * still updates the raw `UrlTree` with the assumption that the navigation was caused by the
     * location change listener due to a URL update by the AngularJS router. In this case, the router
     * still need to know what the browser's URL is for future navigations.
     */
    abstract getRawUrlTree(): UrlTree;
    /** Returns the current state stored by the browser for the current history entry. */
    abstract restoredState(): RestoredState | null | undefined;
    /** Returns the current RouterState. */
    abstract getRouterState(): RouterState;
    /**
     * Registers a listener that is called whenever the current history entry changes by some API
     * outside the Router. This includes user-activated changes like back buttons and link clicks, but
     * also includes programmatic APIs called by non-Router JavaScript.
     */
    abstract registerNonRouterCurrentEntryChangeListener(listener: (url: string, state: RestoredState | null | undefined) => void): SubscriptionLike;
    /**
     * Handles a navigation event sent from the Router. These are typically events that indicate a
     * navigation has started, progressed, been cancelled, or finished.
     */
    abstract handleRouterEvent(e: Event | PrivateRouterEvents, currentTransition: Navigation): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateManager>;
}
export declare class HistoryStateManager extends StateManager {
    private readonly location;
    private readonly urlSerializer;
    private readonly options;
    private readonly canceledNavigationResolution;
    private urlHandlingStrategy;
    private urlUpdateStrategy;
    private currentUrlTree;
    getCurrentUrlTree(): UrlTree;
    private rawUrlTree;
    getRawUrlTree(): UrlTree;
    /**
     * The id of the currently active page in the router.
     * Updated to the transition's target id on a successful navigation.
     *
     * This is used to track what page the router last activated. When an attempted navigation fails,
     * the router can then use this to compute how to restore the state back to the previously active
     * page.
     */
    private currentPageId;
    private lastSuccessfulId;
    restoredState(): RestoredState | null | undefined;
    /**
     * The ɵrouterPageId of whatever page is currently active in the browser history. This is
     * important for computing the target page id for new navigations because we need to ensure each
     * page id in the browser history is 1 more than the previous entry.
     */
    private get browserPageId();
    private routerState;
    getRouterState(): RouterState;
    private stateMemento;
    private createStateMemento;
    registerNonRouterCurrentEntryChangeListener(listener: (url: string, state: RestoredState | null | undefined) => void): SubscriptionLike;
    handleRouterEvent(e: Event | PrivateRouterEvents, currentTransition: Navigation): void;
    private setBrowserUrl;
    /**
     * Performs the necessary rollback action to restore the browser URL to the
     * state before the transition.
     */
    private restoreHistory;
    private resetState;
    private resetUrlToCurrentUrlTree;
    private generateNgRouterState;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistoryStateManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HistoryStateManager>;
}
