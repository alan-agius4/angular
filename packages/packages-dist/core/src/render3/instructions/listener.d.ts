/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { TNode } from '../interfaces/node';
import { GlobalTargetResolver, Renderer } from '../interfaces/renderer';
import { RNode } from '../interfaces/renderer_dom';
import { LView, TView } from '../interfaces/view';
import { DirectiveDef } from '../interfaces/definition';
/**
 * Contains a reference to a function that disables event replay feature
 * for server-side rendered applications. This function is overridden with
 * an actual implementation when the event replay feature is enabled via
 * `withEventReplay()` call.
 */
declare let stashEventListener: (el: RNode, eventName: string, listenerFn: (e?: any) => any) => void;
export declare function setStashFn(fn: typeof stashEventListener): void;
/**
 * Adds an event listener to the current node.
 *
 * If an output exists on one of the node's directives, it also subscribes to the output
 * and saves the subscription for later cleanup.
 *
 * @param eventName Name of the event
 * @param listenerFn The function to be called when event emits
 * @param useCapture Whether or not to use capture in event listener - this argument is a reminder
 *     from the Renderer3 infrastructure and should be removed from the instruction arguments
 * @param eventTargetResolver Function that returns global target information in case this listener
 * should be attached to a global object like window, document or body
 *
 * @codeGenApi
 */
export declare function ɵɵlistener(eventName: string, listenerFn: (e?: any) => any, useCapture?: boolean, eventTargetResolver?: GlobalTargetResolver): typeof ɵɵlistener;
/**
 * Registers a synthetic host listener (e.g. `(@foo.start)`) on a component or directive.
 *
 * This instruction is for compatibility purposes and is designed to ensure that a
 * synthetic host listener (e.g. `@HostListener('@foo.start')`) properly gets rendered
 * in the component's renderer. Normally all host listeners are evaluated with the
 * parent component's renderer, but, in the case of animation @triggers, they need
 * to be evaluated with the sub component's renderer (because that's where the
 * animation triggers are defined).
 *
 * Do not use this instruction as a replacement for `listener`. This instruction
 * only exists to ensure compatibility with the ViewEngine's host binding behavior.
 *
 * @param eventName Name of the event
 * @param listenerFn The function to be called when event emits
 * @param useCapture Whether or not to use capture in event listener
 * @param eventTargetResolver Function that returns global target information in case this listener
 * should be attached to a global object like window, document or body
 *
 * @codeGenApi
 */
export declare function ɵɵsyntheticHostListener(eventName: string, listenerFn: (e?: any) => any): typeof ɵɵsyntheticHostListener;
export declare function listenerInternal(tView: TView, lView: LView<{} | null>, renderer: Renderer, tNode: TNode, eventName: string, listenerFn: (e?: any) => any, eventTargetResolver?: GlobalTargetResolver): void;
/**
 * Wraps an event listener with a function that marks ancestors dirty and prevents default behavior,
 * if applicable.
 *
 * @param tNode The TNode associated with this listener
 * @param lView The LView that contains this listener
 * @param listenerFn The listener function to call
 * @param wrapWithPreventDefault Whether or not to prevent default behavior
 * (the procedural renderer does this already, so in those cases, we should skip)
 */
export declare function wrapListener(tNode: TNode, lView: LView<{} | null>, context: {} | null, listenerFn: (e?: any) => any): EventListener;
/** Listens to an output on a specific directive. */
export declare function listenToDirectiveOutput(tNode: TNode, tView: TView, lView: LView, target: DirectiveDef<unknown>, eventName: string, listenerFn: (e?: any) => any): boolean;
export {};
