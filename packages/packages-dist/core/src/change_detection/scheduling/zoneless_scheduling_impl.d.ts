import { EnvironmentProviders } from '../../di/interface/provider';
import { ChangeDetectionScheduler, NotificationSource } from './zoneless_scheduling';
import * as i0 from "../../r3_symbols";
export declare class ChangeDetectionSchedulerImpl implements ChangeDetectionScheduler {
    private readonly appRef;
    private readonly taskService;
    private readonly ngZone;
    private readonly zonelessEnabled;
    private readonly tracing;
    private readonly disableScheduling;
    private readonly zoneIsDefined;
    private readonly schedulerTickApplyArgs;
    private readonly subscriptions;
    private readonly angularZoneId;
    private readonly scheduleInRootZone;
    private cancelScheduledCallback;
    private useMicrotaskScheduler;
    runningTick: boolean;
    pendingRenderTaskId: number | null;
    constructor();
    notify(source: NotificationSource): void;
    private shouldScheduleTick;
    /**
     * Calls ApplicationRef._tick inside the `NgZone`.
     *
     * Calling `tick` directly runs change detection and cancels any change detection that had been
     * scheduled previously.
     *
     * @param shouldRefreshViews Passed directly to `ApplicationRef._tick` and skips straight to
     *     render hooks when `false`.
     */
    private tick;
    ngOnDestroy(): void;
    private cleanup;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangeDetectionSchedulerImpl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChangeDetectionSchedulerImpl>;
}
/**
 * Provides change detection without ZoneJS for the application bootstrapped using
 * `bootstrapApplication`.
 *
 * This function allows you to configure the application to not use the state/state changes of
 * ZoneJS to schedule change detection in the application. This will work when ZoneJS is not present
 * on the page at all or if it exists because something else is using it (either another Angular
 * application which uses ZoneJS for scheduling or some other library that relies on ZoneJS).
 *
 * This can also be added to the `TestBed` providers to configure the test environment to more
 * closely match production behavior. This will help give higher confidence that components are
 * compatible with zoneless change detection.
 *
 * ZoneJS uses browser events to trigger change detection. When using this provider, Angular will
 * instead use Angular APIs to schedule change detection. These APIs include:
 *
 * - `ChangeDetectorRef.markForCheck`
 * - `ComponentRef.setInput`
 * - updating a signal that is read in a template
 * - when bound host or template listeners are triggered
 * - attaching a view that was marked dirty by one of the above
 * - removing a view
 * - registering a render hook (templates are only refreshed if render hooks do one of the above)
 *
 * @usageNotes
 * ```ts
 * bootstrapApplication(MyApp, {providers: [
 *   provideExperimentalZonelessChangeDetection(),
 * ]});
 * ```
 *
 * This API is experimental. Neither the shape, nor the underlying behavior is stable and can change
 * in patch versions. There are known feature gaps and API ergonomic considerations. We will iterate
 * on the exact API based on the feedback and our understanding of the problem and solution space.
 *
 * @publicApi
 * @experimental
 * @see {@link /api/platform-browser/bootstrapApplication bootstrapApplication}
 */
export declare function provideExperimentalZonelessChangeDetection(): EnvironmentProviders;
