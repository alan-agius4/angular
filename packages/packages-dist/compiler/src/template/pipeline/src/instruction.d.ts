/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as o from '../../../output/output_ast';
import { ParseSourceSpan } from '../../../parse_util';
import * as ir from '../ir';
export declare function element(slot: number, tag: string, constIndex: number | null, localRefIndex: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function elementStart(slot: number, tag: string, constIndex: number | null, localRefIndex: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function elementEnd(sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function elementContainerStart(slot: number, constIndex: number | null, localRefIndex: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function elementContainer(slot: number, constIndex: number | null, localRefIndex: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function elementContainerEnd(): ir.CreateOp;
export declare function template(slot: number, templateFnRef: o.Expression, decls: number, vars: number, tag: string | null, constIndex: number | null, localRefs: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function disableBindings(): ir.CreateOp;
export declare function enableBindings(): ir.CreateOp;
export declare function listener(name: string, handlerFn: o.Expression, eventTargetResolver: o.ExternalReference | null, syntheticHost: boolean, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function twoWayBindingSet(target: o.Expression, value: o.Expression): o.Expression;
export declare function twoWayListener(name: string, handlerFn: o.Expression, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function pipe(slot: number, name: string): ir.CreateOp;
export declare function namespaceHTML(): ir.CreateOp;
export declare function namespaceSVG(): ir.CreateOp;
export declare function namespaceMath(): ir.CreateOp;
export declare function advance(delta: number, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function reference(slot: number): o.Expression;
export declare function nextContext(steps: number): o.Expression;
export declare function getCurrentView(): o.Expression;
export declare function restoreView(savedView: o.Expression): o.Expression;
export declare function resetView(returnValue: o.Expression): o.Expression;
export declare function text(slot: number, initialValue: string, sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function defer(selfSlot: number, primarySlot: number, dependencyResolverFn: o.Expression | null, loadingSlot: number | null, placeholderSlot: number | null, errorSlot: number | null, loadingConfig: o.Expression | null, placeholderConfig: o.Expression | null, enableTimerScheduling: boolean, sourceSpan: ParseSourceSpan | null, flags: ir.TDeferDetailsFlags | null): ir.CreateOp;
export declare function deferOn(trigger: ir.DeferTriggerKind, args: number[], modifier: ir.DeferOpModifierKind, sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function projectionDef(def: o.Expression | null): ir.CreateOp;
export declare function projection(slot: number, projectionSlotIndex: number, attributes: o.LiteralArrayExpr | null, fallbackFnName: string | null, fallbackDecls: number | null, fallbackVars: number | null, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function i18nStart(slot: number, constIndex: number, subTemplateIndex: number, sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function repeaterCreate(slot: number, viewFnName: string, decls: number, vars: number, tag: string | null, constIndex: number | null, trackByFn: o.Expression, trackByUsesComponentInstance: boolean, emptyViewFnName: string | null, emptyDecls: number | null, emptyVars: number | null, emptyTag: string | null, emptyConstIndex: number | null, sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function repeater(collection: o.Expression, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function deferWhen(modifier: ir.DeferOpModifierKind, expr: o.Expression, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function declareLet(slot: number, sourceSpan: ParseSourceSpan): ir.CreateOp;
export declare function storeLet(value: o.Expression, sourceSpan: ParseSourceSpan): o.Expression;
export declare function readContextLet(slot: number): o.Expression;
export declare function i18n(slot: number, constIndex: number, subTemplateIndex: number, sourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function i18nEnd(endSourceSpan: ParseSourceSpan | null): ir.CreateOp;
export declare function i18nAttributes(slot: number, i18nAttributesConfig: number): ir.CreateOp;
export declare function property(name: string, expression: o.Expression, sanitizer: o.Expression | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function twoWayProperty(name: string, expression: o.Expression, sanitizer: o.Expression | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function attribute(name: string, expression: o.Expression, sanitizer: o.Expression | null, namespace: string | null): ir.UpdateOp;
export declare function styleProp(name: string, expression: o.Expression, unit: string | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function classProp(name: string, expression: o.Expression, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function styleMap(expression: o.Expression, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function classMap(expression: o.Expression, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function pipeBind(slot: number, varOffset: number, args: o.Expression[]): o.Expression;
export declare function pipeBindV(slot: number, varOffset: number, args: o.Expression): o.Expression;
export declare function textInterpolate(strings: string[], expressions: o.Expression[], sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function i18nExp(expr: o.Expression, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function i18nApply(slot: number, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function propertyInterpolate(name: string, strings: string[], expressions: o.Expression[], sanitizer: o.Expression | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function attributeInterpolate(name: string, strings: string[], expressions: o.Expression[], sanitizer: o.Expression | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function stylePropInterpolate(name: string, strings: string[], expressions: o.Expression[], unit: string | null, sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function styleMapInterpolate(strings: string[], expressions: o.Expression[], sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function classMapInterpolate(strings: string[], expressions: o.Expression[], sourceSpan: ParseSourceSpan): ir.UpdateOp;
export declare function hostProperty(name: string, expression: o.Expression, sanitizer: o.Expression | null, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function syntheticHostProperty(name: string, expression: o.Expression, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
export declare function pureFunction(varOffset: number, fn: o.Expression, args: o.Expression[]): o.Expression;
export declare function attachSourceLocation(templatePath: string, locations: o.LiteralArrayExpr): ir.CreateOp;
export declare function conditional(condition: o.Expression, contextValue: o.Expression | null, sourceSpan: ParseSourceSpan | null): ir.UpdateOp;
