/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationEvent, AnimationPlayer, ɵStyleDataMap } from '@angular/animations';
import { AnimationStyleNormalizer } from '../dsl/style_normalization/animation_style_normalizer';
export declare function optimizeGroupPlayer(players: AnimationPlayer[]): AnimationPlayer;
export declare function normalizeKeyframes(normalizer: AnimationStyleNormalizer, keyframes: Array<ɵStyleDataMap>, preStyles?: ɵStyleDataMap, postStyles?: ɵStyleDataMap): Array<ɵStyleDataMap>;
export declare function listenOnPlayer(player: AnimationPlayer, eventName: string, event: AnimationEvent | undefined, callback: (event: any) => any): void;
export declare function copyAnimationEvent(e: AnimationEvent, phaseName: string, player: AnimationPlayer): AnimationEvent;
export declare function makeAnimationEvent(element: any, triggerName: string, fromState: string, toState: string, phaseName?: string, totalTime?: number, disabled?: boolean): AnimationEvent;
export declare function getOrSetDefaultValue<T, V>(map: Map<T, V>, key: T, defaultValue: V): V;
export declare function parseTimelineCommand(command: string): [string, string];
export declare function getParentElement(element: any): unknown | null;
export declare function validateStyleProperty(prop: string): boolean;
export declare function validateWebAnimatableStyleProperty(prop: string): boolean;
export declare function getBodyNode(): any | null;
export declare function containsElement(elm1: any, elm2: any): boolean;
export declare function invokeQuery(element: any, selector: string, multi: boolean): any[];
export declare function hypenatePropsKeys(original: ɵStyleDataMap): ɵStyleDataMap;
