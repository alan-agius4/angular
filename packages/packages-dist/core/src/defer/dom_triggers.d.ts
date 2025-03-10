/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import type { Injector } from '../di';
import { TNode } from '../render3/interfaces/node';
import { LView } from '../render3/interfaces/view';
import { TriggerType } from './interfaces';
/** Names of the events considered as interaction events. */
export declare const interactionEventNames: readonly ["click", "keydown"];
/** Names of the events considered as hover events. */
export declare const hoverEventNames: readonly ["mouseenter", "mouseover", "focusin"];
/**
 * Registers an interaction trigger.
 * @param trigger Element that is the trigger.
 * @param callback Callback to be invoked when the trigger is interacted with.
 */
export declare function onInteraction(trigger: Element, callback: VoidFunction): VoidFunction;
/**
 * Registers a hover trigger.
 * @param trigger Element that is the trigger.
 * @param callback Callback to be invoked when the trigger is hovered over.
 */
export declare function onHover(trigger: Element, callback: VoidFunction): VoidFunction;
/**
 * Registers a viewport trigger.
 * @param trigger Element that is the trigger.
 * @param callback Callback to be invoked when the trigger comes into the viewport.
 * @param injector Injector that can be used by the trigger to resolve DI tokens.
 */
export declare function onViewport(trigger: Element, callback: VoidFunction, injector: Injector): VoidFunction;
/**
 * Helper function to get the LView in which a deferred block's trigger is rendered.
 * @param deferredHostLView LView in which the deferred block is defined.
 * @param deferredTNode TNode defining the deferred block.
 * @param walkUpTimes Number of times to go up in the view hierarchy to find the trigger's view.
 *   A negative value means that the trigger is inside the block's placeholder, while an undefined
 *   value means that the trigger is in the same LView as the deferred block.
 */
export declare function getTriggerLView(deferredHostLView: LView, deferredTNode: TNode, walkUpTimes: number | undefined): LView | null;
/**
 * Gets the element that a deferred block's trigger is pointing to.
 * @param triggerLView LView in which the trigger is defined.
 * @param triggerIndex Index at which the trigger element should've been rendered.
 */
export declare function getTriggerElement(triggerLView: LView, triggerIndex: number): Element;
/**
 * Registers a DOM-node based trigger.
 * @param initialLView LView in which the defer block is rendered.
 * @param tNode TNode representing the defer block.
 * @param triggerIndex Index at which to find the trigger element.
 * @param walkUpTimes Number of times to go up/down in the view hierarchy to find the trigger.
 * @param registerFn Function that will register the DOM events.
 * @param callback Callback to be invoked when the trigger receives the event that should render
 *     the deferred block.
 * @param type Trigger type to distinguish between regular and prefetch triggers.
 */
export declare function registerDomTrigger(initialLView: LView, tNode: TNode, triggerIndex: number, walkUpTimes: number | undefined, registerFn: (element: Element, callback: VoidFunction, injector: Injector) => VoidFunction, callback: VoidFunction, type: TriggerType): void;
