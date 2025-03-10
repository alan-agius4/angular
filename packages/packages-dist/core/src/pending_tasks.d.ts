/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { BehaviorSubject } from 'rxjs';
import { OnDestroy } from './interface/lifecycle_hooks';
/**
 * Internal implementation of the pending tasks service.
 */
export declare class PendingTasksInternal implements OnDestroy {
    private taskId;
    private pendingTasks;
    private get _hasPendingTasks();
    hasPendingTasks: BehaviorSubject<boolean>;
    add(): number;
    has(taskId: number): boolean;
    remove(taskId: number): void;
    ngOnDestroy(): void;
    /** @nocollapse */
    static ɵprov: unknown;
}
/**
 * Service that keeps track of pending tasks contributing to the stableness of Angular
 * application. While several existing Angular services (ex.: `HttpClient`) will internally manage
 * tasks influencing stability, this API gives control over stability to library and application
 * developers for specific cases not covered by Angular internals.
 *
 * The concept of stability comes into play in several important scenarios:
 * - SSR process needs to wait for the application stability before serializing and sending rendered
 * HTML;
 * - tests might want to delay assertions until the application becomes stable;
 *
 * @usageNotes
 * ```ts
 * const pendingTasks = inject(PendingTasks);
 * const taskCleanup = pendingTasks.add();
 * // do work that should block application's stability and then:
 * taskCleanup();
 * ```
 *
 * @publicApi
 * @developerPreview
 */
export declare class PendingTasks {
    private readonly internalPendingTasks;
    private readonly scheduler;
    private readonly errorHandler;
    /**
     * Adds a new task that should block application's stability.
     * @returns A cleanup function that removes a task when called.
     */
    add(): () => void;
    /**
     * Runs an asynchronous function and blocks the application's stability until the function completes.
     *
     * ```ts
     * pendingTasks.run(async () => {
     *   const userData = await fetch('/api/user');
     *   this.userData.set(userData);
     * });
     * ```
     *
     * @param fn The asynchronous function to execute
     */
    run<T>(fn: () => Promise<T>): void;
    /** @nocollapse */
    static ɵprov: unknown;
}
