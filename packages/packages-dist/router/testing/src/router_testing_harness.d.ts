/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { DebugElement, Type, WritableSignal } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
export declare class RootFixtureService {
    private fixture?;
    private harness?;
    createHarness(): RouterTestingHarness;
    private getRootFixture;
    static ɵfac: i0.ɵɵFactoryDeclaration<RootFixtureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RootFixtureService>;
}
export declare class RootCmp {
    outlet?: RouterOutlet;
    readonly routerOutletData: WritableSignal<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RootCmp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RootCmp, "ng-component", never, {}, {}, never, never, true, never>;
}
/**
 * A testing harness for the `Router` to reduce the boilerplate needed to test routes and routed
 * components.
 *
 * @publicApi
 */
export declare class RouterTestingHarness {
    /**
     * Creates a `RouterTestingHarness` instance.
     *
     * The `RouterTestingHarness` also creates its own root component with a `RouterOutlet` for the
     * purposes of rendering route components.
     *
     * Throws an error if an instance has already been created.
     * Use of this harness also requires `destroyAfterEach: true` in the `ModuleTeardownOptions`
     *
     * @param initialUrl The target of navigation to trigger before returning the harness.
     */
    static create(initialUrl?: string): Promise<RouterTestingHarness>;
    /**
     * Fixture of the root component of the RouterTestingHarness
     */
    readonly fixture: ComponentFixture<{
        routerOutletData: WritableSignal<unknown>;
    }>;
    /** Instructs the root fixture to run change detection. */
    detectChanges(): void;
    /** The `DebugElement` of the `RouterOutlet` component. `null` if the outlet is not activated. */
    get routeDebugElement(): DebugElement | null;
    /** The native element of the `RouterOutlet` component. `null` if the outlet is not activated. */
    get routeNativeElement(): HTMLElement | null;
    /**
     * Triggers a `Router` navigation and waits for it to complete.
     *
     * The root component with a `RouterOutlet` created for the harness is used to render `Route`
     * components. The root component is reused within the same test in subsequent calls to
     * `navigateForTest`.
     *
     * When testing `Routes` with a guards that reject the navigation, the `RouterOutlet` might not be
     * activated and the `activatedComponent` may be `null`.
     *
     * {@example router/testing/test/router_testing_harness_examples.spec.ts region='Guard'}
     *
     * @param url The target of the navigation. Passed to `Router.navigateByUrl`.
     * @returns The activated component instance of the `RouterOutlet` after navigation completes
     *     (`null` if the outlet does not get activated).
     */
    navigateByUrl(url: string): Promise<null | {}>;
    /**
     * Triggers a router navigation and waits for it to complete.
     *
     * The root component with a `RouterOutlet` created for the harness is used to render `Route`
     * components.
     *
     * {@example router/testing/test/router_testing_harness_examples.spec.ts region='RoutedComponent'}
     *
     * The root component is reused within the same test in subsequent calls to `navigateByUrl`.
     *
     * This function also makes it easier to test components that depend on `ActivatedRoute` data.
     *
     * {@example router/testing/test/router_testing_harness_examples.spec.ts region='ActivatedRoute'}
     *
     * @param url The target of the navigation. Passed to `Router.navigateByUrl`.
     * @param requiredRoutedComponentType After navigation completes, the required type for the
     *     activated component of the `RouterOutlet`. If the outlet is not activated or a different
     *     component is activated, this function will throw an error.
     * @returns The activated component instance of the `RouterOutlet` after navigation completes.
     */
    navigateByUrl<T>(url: string, requiredRoutedComponentType: Type<T>): Promise<T>;
}
