/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationMetadata, AnimationOptions, ɵStyleDataMap } from '@angular/animations';
import { AnimationDriver } from '../render/animation_driver';
import { AnimationTimelineInstruction } from './animation_timeline_instruction';
import { ElementInstructionMap } from './element_instruction_map';
export declare class Animation {
    private _driver;
    private _animationAst;
    constructor(_driver: AnimationDriver, input: AnimationMetadata | AnimationMetadata[]);
    buildTimelines(element: any, startingStyles: ɵStyleDataMap | Array<ɵStyleDataMap>, destinationStyles: ɵStyleDataMap | Array<ɵStyleDataMap>, options: AnimationOptions, subInstructions?: ElementInstructionMap): AnimationTimelineInstruction[];
}
