/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * Provides programmatic control of a reusable animation sequence,
 * built using the <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code>
 * method which returns an `AnimationFactory`, whose
 * <code>[create](api/animations/AnimationFactory#create)()</code> method instantiates and
 * initializes this interface.
 *
 * @see {@link AnimationBuilder}
 * @see {@link AnimationFactory}
 * @see {@link animate}
 *
 * @publicApi
 */
export interface AnimationPlayer {
    /**
     * Provides a callback to invoke when the animation finishes.
     * @param fn The callback function.
     * @see {@link #finish}
     */
    onDone(fn: () => void): void;
    /**
     * Provides a callback to invoke when the animation starts.
     * @param fn The callback function.
     * @see {@link #play}
     */
    onStart(fn: () => void): void;
    /**
     * Provides a callback to invoke after the animation is destroyed.
     * @param fn The callback function.
     * @see {@link #destroy}
     * @see {@link #beforeDestroy}
     */
    onDestroy(fn: () => void): void;
    /**
     * Initializes the animation.
     */
    init(): void;
    /**
     * Reports whether the animation has started.
     * @returns True if the animation has started, false otherwise.
     */
    hasStarted(): boolean;
    /**
     * Runs the animation, invoking the `onStart()` callback.
     */
    play(): void;
    /**
     * Pauses the animation.
     */
    pause(): void;
    /**
     * Restarts the paused animation.
     */
    restart(): void;
    /**
     * Ends the animation, invoking the `onDone()` callback.
     */
    finish(): void;
    /**
     * Destroys the animation, after invoking the `beforeDestroy()` callback.
     * Calls the `onDestroy()` callback when destruction is completed.
     */
    destroy(): void;
    /**
     * Resets the animation to its initial state.
     */
    reset(): void;
    /**
     * Sets the position of the animation.
     * @param position A fractional value, representing the progress through the animation.
     */
    setPosition(position: number): void;
    /**
     * Reports the current position of the animation.
     * @returns A fractional value, representing the progress through the animation.
     */
    getPosition(): number;
    /**
     * The parent of this player, if any.
     */
    parentPlayer: AnimationPlayer | null;
    /**
     * The total run time of the animation, in milliseconds.
     */
    readonly totalTime: number;
    /**
     * Provides a callback to invoke before the animation is destroyed.
     */
    beforeDestroy?: () => any;
}
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see {@link animate}
 * @see {@link AnimationPlayer}
 *
 * @publicApi
 */
export declare class NoopAnimationPlayer implements AnimationPlayer {
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _originalOnDoneFns;
    private _originalOnStartFns;
    private _started;
    private _destroyed;
    private _finished;
    private _position;
    parentPlayer: AnimationPlayer | null;
    readonly totalTime: number;
    constructor(duration?: number, delay?: number);
    private _onFinish;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    hasStarted(): boolean;
    init(): void;
    play(): void;
    private _onStart;
    pause(): void;
    restart(): void;
    finish(): void;
    destroy(): void;
    reset(): void;
    setPosition(position: number): void;
    getPosition(): number;
}
