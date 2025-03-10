/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { InjectionToken, Injector, Provider } from '@angular/core';
export declare const TRANSFER_STATE_SERIALIZED_FOR_APPID: InjectionToken<Set<string>>;
export declare const TRANSFER_STATE_SERIALIZATION_PROVIDERS: Provider[];
/** TODO: Move this to a utils folder and convert to use SafeValues. */
export declare function createScript(doc: Document, textContent: string, nonce: string | null): HTMLScriptElement;
export declare function warnIfStateTransferHappened(injector: Injector): void;
