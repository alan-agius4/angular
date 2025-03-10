/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimateTimings, AnimationMetadata, AnimationMetadataType, AnimationOptions, ɵStyleData, ɵStyleDataMap } from '@angular/animations';
import { Ast as AnimationAst, AstVisitor as AnimationAstVisitor } from './dsl/animation_ast';
import { AnimationDslVisitor } from './dsl/animation_dsl_visitor';
export declare const SUBSTITUTION_EXPR_START = "{{";
export declare const SUBSTITUTION_EXPR_END = "}}";
export declare const ENTER_CLASSNAME = "ng-enter";
export declare const LEAVE_CLASSNAME = "ng-leave";
export declare const NG_TRIGGER_CLASSNAME = "ng-trigger";
export declare const NG_TRIGGER_SELECTOR = ".ng-trigger";
export declare const NG_ANIMATING_CLASSNAME = "ng-animating";
export declare const NG_ANIMATING_SELECTOR = ".ng-animating";
export declare function resolveTimingValue(value: string | number): number;
export declare function resolveTiming(timings: string | number | AnimateTimings, errors: Error[], allowNegativeValues?: boolean): AnimateTimings;
export declare function normalizeKeyframes(keyframes: Array<ɵStyleData> | Array<ɵStyleDataMap>): Array<ɵStyleDataMap>;
export declare function normalizeStyles(styles: ɵStyleDataMap | Array<ɵStyleDataMap>): ɵStyleDataMap;
export declare function setStyles(element: any, styles: ɵStyleDataMap, formerStyles?: ɵStyleDataMap): void;
export declare function eraseStyles(element: any, styles: ɵStyleDataMap): void;
export declare function normalizeAnimationEntry(steps: AnimationMetadata | AnimationMetadata[]): AnimationMetadata;
export declare function validateStyleParams(value: string | number | null | undefined, options: AnimationOptions, errors: Error[]): void;
export declare function extractStyleParams(value: string | number | null | undefined): string[];
export declare function interpolateParams(value: string | number, params: {
    [name: string]: any;
}, errors: Error[]): string | number;
export declare function dashCaseToCamelCase(input: string): string;
export declare function camelCaseToDashCase(input: string): string;
export declare function allowPreviousPlayerStylesMerge(duration: number, delay: number): boolean;
export declare function balancePreviousStylesIntoKeyframes(element: any, keyframes: Array<ɵStyleDataMap>, previousStyles: ɵStyleDataMap): ɵStyleDataMap[];
export declare function visitDslNode(visitor: AnimationDslVisitor, node: AnimationMetadata, context: any): any;
export declare function visitDslNode(visitor: AnimationAstVisitor, node: AnimationAst<AnimationMetadataType>, context: any): any;
export declare function computeStyle(element: any, prop: string): string;
