/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export declare function invalidTimingValue(exp: string | number): Error;
export declare function negativeStepValue(): Error;
export declare function negativeDelayValue(): Error;
export declare function invalidStyleParams(varName: string): Error;
export declare function invalidParamValue(varName: string): Error;
export declare function invalidNodeType(nodeType: string): Error;
export declare function invalidCssUnitValue(userProvidedProperty: string, value: string): Error;
export declare function invalidTrigger(): Error;
export declare function invalidDefinition(): Error;
export declare function invalidState(metadataName: string, missingSubs: string[]): Error;
export declare function invalidStyleValue(value: string): Error;
export declare function invalidProperty(prop: string): Error;
export declare function invalidParallelAnimation(prop: string, firstStart: number, firstEnd: number, secondStart: number, secondEnd: number): Error;
export declare function invalidKeyframes(): Error;
export declare function invalidOffset(): Error;
export declare function keyframeOffsetsOutOfOrder(): Error;
export declare function keyframesMissingOffsets(): Error;
export declare function invalidStagger(): Error;
export declare function invalidQuery(selector: string): Error;
export declare function invalidExpression(expr: string): Error;
export declare function invalidTransitionAlias(alias: string): Error;
export declare function validationFailed(errors: Error[]): Error;
export declare function buildingFailed(errors: Error[]): Error;
export declare function triggerBuildFailed(name: string, errors: Error[]): Error;
export declare function animationFailed(errors: Error[]): Error;
export declare function registerFailed(errors: Error[]): Error;
export declare function missingOrDestroyedAnimation(): Error;
export declare function createAnimationFailed(errors: Error[]): Error;
export declare function missingPlayer(id: string): Error;
export declare function missingTrigger(phase: string, name: string): Error;
export declare function missingEvent(name: string): Error;
export declare function unsupportedTriggerEvent(phase: string, name: string): Error;
export declare function unregisteredTrigger(name: string): Error;
export declare function triggerTransitionsFailed(errors: Error[]): Error;
export declare function triggerParsingFailed(name: string, errors: Error[]): Error;
export declare function transitionFailed(name: string, errors: Error[]): Error;
