/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ReactiveNode, SIGNAL } from '@angular/core/primitives/signals';
import { LView } from '../interfaces/view';
import { InjectionToken } from '../../di/injection_token';
import { Injector } from '../../di/injector';
import { ChangeDetectionScheduler } from '../../change_detection/scheduling/zoneless_scheduling';
import { EffectScheduler, SchedulableEffect } from './root_effect_scheduler';
/**
 * A global reactive effect, which can be manually destroyed.
 *
 * @developerPreview
 */
export interface EffectRef {
    /**
     * Shut down the effect, removing it from any upcoming scheduled executions.
     */
    destroy(): void;
}
export declare class EffectRefImpl implements EffectRef {
    [SIGNAL]: EffectNode;
    constructor(node: EffectNode);
    destroy(): void;
}
/**
 * Options passed to the `effect` function.
 *
 * @developerPreview
 */
export interface CreateEffectOptions {
    /**
     * The `Injector` in which to create the effect.
     *
     * If this is not provided, the current [injection context](guide/di/dependency-injection-context)
     * will be used instead (via `inject`).
     */
    injector?: Injector;
    /**
     * Whether the `effect` should require manual cleanup.
     *
     * If this is `false` (the default) the effect will automatically register itself to be cleaned up
     * with the current `DestroyRef`.
     */
    manualCleanup?: boolean;
    /**
     * Always create a root effect (which is scheduled as a microtask) regardless of whether `effect`
     * is called within a component.
     */
    forceRoot?: true;
    /**
     * @deprecated no longer required, signal writes are allowed by default.
     */
    allowSignalWrites?: boolean;
    /**
     * A debug name for the effect. Used in Angular DevTools to identify the effect.
     */
    debugName?: string;
}
/**
 * An effect can, optionally, register a cleanup function. If registered, the cleanup is executed
 * before the next effect run. The cleanup function makes it possible to "cancel" any work that the
 * previous effect run might have started.
 *
 * @developerPreview
 */
export type EffectCleanupFn = () => void;
/**
 * A callback passed to the effect function that makes it possible to register cleanup logic.
 *
 * @developerPreview
 */
export type EffectCleanupRegisterFn = (cleanupFn: EffectCleanupFn) => void;
/**
 * Registers an "effect" that will be scheduled & executed whenever the signals that it reads
 * changes.
 *
 * Angular has two different kinds of effect: component effects and root effects. Component effects
 * are created when `effect()` is called from a component, directive, or within a service of a
 * component/directive. Root effects are created when `effect()` is called from outside the
 * component tree, such as in a root service, or when the `forceRoot` option is provided.
 *
 * The two effect types differ in their timing. Component effects run as a component lifecycle
 * event during Angular's synchronization (change detection) process, and can safely read input
 * signals or create/destroy views that depend on component state. Root effects run as microtasks
 * and have no connection to the component tree or change detection.
 *
 * `effect()` must be run in injection context, unless the `injector` option is manually specified.
 *
 * @developerPreview
 */
export declare function effect(effectFn: (onCleanup: EffectCleanupRegisterFn) => void, options?: CreateEffectOptions): EffectRef;
export interface EffectNode extends ReactiveNode, SchedulableEffect {
    hasRun: boolean;
    cleanupFns: EffectCleanupFn[] | undefined;
    injector: Injector;
    notifier: ChangeDetectionScheduler;
    onDestroyFn: () => void;
    fn: (cleanupFn: EffectCleanupRegisterFn) => void;
    run(): void;
    destroy(): void;
    maybeCleanup(): void;
}
export interface ViewEffectNode extends EffectNode {
    view: LView;
}
export interface RootEffectNode extends EffectNode {
    scheduler: EffectScheduler;
}
/**
 * Not public API, which guarantees `EffectScheduler` only ever comes from the application root
 * injector.
 */
export declare const APP_EFFECT_SCHEDULER: InjectionToken<EffectScheduler>;
export declare const BASE_EFFECT_NODE: Omit<EffectNode, 'fn' | 'destroy' | 'injector' | 'notifier'>;
export declare const ROOT_EFFECT_NODE: Omit<RootEffectNode, 'fn' | 'scheduler' | 'notifier' | 'injector'>;
export declare const VIEW_EFFECT_NODE: Omit<ViewEffectNode, 'fn' | 'view' | 'injector' | 'notifier'>;
export declare function createViewEffect(view: LView, notifier: ChangeDetectionScheduler, fn: (onCleanup: EffectCleanupRegisterFn) => void): ViewEffectNode;
export declare function createRootEffect(fn: (onCleanup: EffectCleanupRegisterFn) => void, scheduler: EffectScheduler, notifier: ChangeDetectionScheduler): RootEffectNode;
