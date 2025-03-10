/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Restriction } from './restriction';
import { EventInfo } from './event_info';
/** Creates an `EarlyJsactionData`, adds events to it, and populates it on the window. */
export declare function bootstrapGlobalEarlyEventContract(bubbleEventTypes: string[], captureEventTypes: string[]): void;
/** Get the queued `EventInfo` objects that were dispatched before a dispatcher was registered. */
export declare function getGlobalQueuedEventInfos(): EventInfo[];
/** Registers a dispatcher function on the `EarlyJsactionData` present on the window. */
export declare function registerGlobalDispatcher(restriction: Restriction, dispatcher: (eventInfo: EventInfo) => void): void;
/** Removes all event listener handlers. */
export declare function removeAllGlobalEventListeners(): void;
/** Removes the global early event contract. */
export declare function clearGlobalEarlyEventContract(): void;
