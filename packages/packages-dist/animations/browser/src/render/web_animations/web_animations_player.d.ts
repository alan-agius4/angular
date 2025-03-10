/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationPlayer, ɵStyleDataMap } from '@angular/animations';
import { SpecialCasedStyles } from '../special_cased_styles';
export declare class WebAnimationsPlayer implements AnimationPlayer {
    element: any;
    keyframes: Array<ɵStyleDataMap>;
    options: {
        [key: string]: string | number;
    };
    private _specialStyles?;
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _duration;
    private _delay;
    private _initialized;
    private _finished;
    private _started;
    private _destroyed;
    private _finalKeyframe?;
    private _originalOnDoneFns;
    private _originalOnStartFns;
    readonly domPlayer: Animation;
    time: number;
    parentPlayer: AnimationPlayer | null;
    currentSnapshot: ɵStyleDataMap;
    constructor(element: any, keyframes: Array<ɵStyleDataMap>, options: {
        [key: string]: string | number;
    }, _specialStyles?: (SpecialCasedStyles | null) | undefined);
    private _onFinish;
    init(): void;
    private _buildPlayer;
    private _preparePlayerBeforeStart;
    private _convertKeyframesToObject;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    private _resetDomPlayerState;
    restart(): void;
    hasStarted(): boolean;
    destroy(): void;
    setPosition(p: number): void;
    getPosition(): number;
    get totalTime(): number;
    beforeDestroy(): void;
}
