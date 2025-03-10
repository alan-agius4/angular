/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Provider } from '@angular/core';
/**
 * Returns mock providers for the `Location` and `LocationStrategy` classes.
 * The mocks are helpful in tests to fire simulated location events.
 *
 * @publicApi
 */
export declare function provideLocationMocks(): Provider[];
