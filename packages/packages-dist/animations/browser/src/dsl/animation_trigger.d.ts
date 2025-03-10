/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ɵStyleDataMap } from '@angular/animations';
import { TriggerAst } from './animation_ast';
import { AnimationStateStyles, AnimationTransitionFactory } from './animation_transition_factory';
import { AnimationStyleNormalizer } from './style_normalization/animation_style_normalizer';
export declare function buildTrigger(name: string, ast: TriggerAst, normalizer: AnimationStyleNormalizer): AnimationTrigger;
export declare class AnimationTrigger {
    name: string;
    ast: TriggerAst;
    private _normalizer;
    transitionFactories: AnimationTransitionFactory[];
    fallbackTransition: AnimationTransitionFactory;
    states: Map<string, AnimationStateStyles>;
    constructor(name: string, ast: TriggerAst, _normalizer: AnimationStyleNormalizer);
    get containsQueries(): boolean;
    matchTransition(currentState: any, nextState: any, element: any, params: {
        [key: string]: any;
    }): AnimationTransitionFactory | null;
    matchStyles(currentState: any, params: {
        [key: string]: any;
    }, errors: Error[]): ɵStyleDataMap;
}
