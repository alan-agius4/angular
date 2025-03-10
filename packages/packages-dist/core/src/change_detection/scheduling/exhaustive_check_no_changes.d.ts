/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { NgZone } from '../../zone/ng_zone';
import { CheckNoChangesMode } from '../../render3/state';
/**
 * Used to periodically verify no expressions have changed after they were checked.
 *
 * @param options Used to configure when the check will execute.
 *   - `interval` will periodically run exhaustive `checkNoChanges` on application views
 *   - `useNgZoneOnStable` will use ZoneJS to determine when change detection might have run
 *      in an application using ZoneJS to drive change detection. When the `NgZone.onStable` would
 *      have emitted, all views attached to the `ApplicationRef` are checked for changes.
 *   - 'exhaustive' means that all views attached to `ApplicationRef` and all the descendants of those views will be
 *     checked for changes (excluding those subtrees which are detached via `ChangeDetectorRef.detach()`).
 *     This is useful because the check that runs after regular change detection does not work for components using `ChangeDetectionStrategy.OnPush`.
 *     This check is will surface any existing errors hidden by `OnPush` components. By default, this check is exhaustive
 *     and will always check all views, regardless of their "dirty" state and `ChangeDetectionStrategy`.
 *
 * When the `useNgZoneOnStable` option is `true`, this function will provide its own `NgZone` implementation and needs
 * to come after any other `NgZone` provider, including `provideZoneChangeDetection()` and `provideExperimentalZonelessChangeDetection()`.
 *
 * @experimental
 * @publicApi
 */
export declare function provideExperimentalCheckNoChangesForDebug(options: {
    interval?: number;
    useNgZoneOnStable?: boolean;
    exhaustive?: boolean;
}): import("@angular/core").EnvironmentProviders;
export declare class DebugNgZoneForCheckNoChanges extends NgZone {
    private readonly checkNoChangesMode;
    private applicationRef?;
    private scheduler?;
    private errorHandler?;
    private readonly injector;
    constructor(checkNoChangesMode: CheckNoChangesMode);
    private checkApplicationViews;
}
