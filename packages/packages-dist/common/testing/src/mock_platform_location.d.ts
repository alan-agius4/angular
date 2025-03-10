/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { LocationChangeListener, PlatformLocation } from '@angular/common';
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Mock platform location config
 *
 * @publicApi
 */
export interface MockPlatformLocationConfig {
    startUrl?: string;
    appBaseHref?: string;
}
/**
 * Provider for mock platform location config
 *
 * @publicApi
 */
export declare const MOCK_PLATFORM_LOCATION_CONFIG: InjectionToken<MockPlatformLocationConfig>;
/**
 * Mock implementation of URL state.
 *
 * @publicApi
 */
export declare class MockPlatformLocation implements PlatformLocation {
    private baseHref;
    private hashUpdate;
    private popStateSubject;
    private urlChangeIndex;
    private urlChanges;
    constructor(config?: MockPlatformLocationConfig);
    get hostname(): string;
    get protocol(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    get state(): unknown;
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): VoidFunction;
    onHashChange(fn: LocationChangeListener): VoidFunction;
    get href(): string;
    get url(): string;
    private parseChanges;
    replaceState(state: any, title: string, newUrl: string): void;
    pushState(state: any, title: string, newUrl: string): void;
    forward(): void;
    back(): void;
    historyGo(relativePosition?: number): void;
    getState(): unknown;
    /**
     * Browsers are inconsistent in when they fire events and perform the state updates
     * The most easiest thing to do in our mock is synchronous and that happens to match
     * Firefox and Chrome, at least somewhat closely
     *
     * https://github.com/WICG/navigation-api#watching-for-navigations
     * https://docs.google.com/document/d/1Pdve-DJ1JCGilj9Yqf5HxRJyBKSel5owgOvUJqTauwU/edit#heading=h.3ye4v71wsz94
     * popstate is always sent before hashchange:
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#when_popstate_is_sent
     */
    private emitEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<MockPlatformLocation, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MockPlatformLocation>;
}
/**
 * Mock implementation of URL state.
 */
export declare class FakeNavigationPlatformLocation implements PlatformLocation {
    private _platformNavigation;
    private window;
    constructor();
    private config;
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): VoidFunction;
    onHashChange(fn: LocationChangeListener): VoidFunction;
    get href(): string;
    get protocol(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    forward(): void;
    back(): void;
    historyGo(relativePosition?: number): void;
    getState(): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<FakeNavigationPlatformLocation, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FakeNavigationPlatformLocation>;
}
