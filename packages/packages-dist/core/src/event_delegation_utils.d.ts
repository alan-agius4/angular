/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { EventContract } from '@angular/core/primitives/event-dispatch';
import { InjectionToken } from './di';
import { RElement } from './render3/interfaces/renderer_dom';
export declare const DEFER_BLOCK_SSR_ID_ATTRIBUTE = "ngb";
declare global {
    interface Element {
        __jsaction_fns: Map<string, Function[]> | undefined;
    }
}
export declare function setJSActionAttributes(nativeElement: Element, eventTypes: string[], parentDeferBlockId?: string | null): void;
export declare const sharedStashFunction: (rEl: RElement, eventType: string, listenerFn: Function) => void;
export declare const sharedMapFunction: (rEl: RElement, jsActionMap: Map<string, Set<Element>>) => void;
export declare function removeListenersFromBlocks(blockNames: string[], jsActionMap: Map<string, Set<Element>>): void;
export declare const removeListeners: (el: Element) => void;
export interface EventContractDetails {
    instance?: EventContract;
}
export declare const JSACTION_EVENT_CONTRACT: InjectionToken<EventContractDetails>;
export declare function invokeListeners(event: Event, currentTarget: Element | null): void;
