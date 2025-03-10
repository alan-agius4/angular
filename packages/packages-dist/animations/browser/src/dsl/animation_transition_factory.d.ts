/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationOptions, ɵStyleDataMap } from '@angular/animations';
import { AnimationDriver } from '../render/animation_driver';
import { StyleAst, TransitionAst } from './animation_ast';
import { AnimationTransitionInstruction } from './animation_transition_instruction';
import { ElementInstructionMap } from './element_instruction_map';
import { AnimationStyleNormalizer } from './style_normalization/animation_style_normalizer';
export declare class AnimationTransitionFactory {
    private _triggerName;
    ast: TransitionAst;
    private _stateStyles;
    constructor(_triggerName: string, ast: TransitionAst, _stateStyles: Map<string, AnimationStateStyles>);
    match(currentState: any, nextState: any, element: any, params: {
        [key: string]: any;
    }): boolean;
    buildStyles(stateName: string | boolean | undefined, params: {
        [key: string]: any;
    }, errors: Error[]): ɵStyleDataMap;
    build(driver: AnimationDriver, element: any, currentState: any, nextState: any, enterClassName: string, leaveClassName: string, currentOptions?: AnimationOptions, nextOptions?: AnimationOptions, subInstructions?: ElementInstructionMap, skipAstBuild?: boolean): AnimationTransitionInstruction;
}
export declare class AnimationStateStyles {
    private styles;
    private defaultParams;
    private normalizer;
    constructor(styles: StyleAst, defaultParams: {
        [key: string]: any;
    }, normalizer: AnimationStyleNormalizer);
    buildStyles(params: {
        [key: string]: any;
    }, errors: Error[]): ɵStyleDataMap;
}
