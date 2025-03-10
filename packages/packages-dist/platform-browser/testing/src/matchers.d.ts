/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Type } from '@angular/core';
/**
 * Jasmine matchers that check Angular specific conditions.
 *
 * Note: These matchers will only work in a browser environment.
 */
export interface NgMatchers<T = any> extends jasmine.Matchers<T> {
    /**
     * Expect the element to have exactly the given text.
     *
     * @usageNotes
     * ### Example
     *
     * {@example testing/ts/matchers.ts region='toHaveText'}
     */
    toHaveText(expected: string): boolean;
    /**
     * Expect the element to have the given CSS class.
     *
     * @usageNotes
     * ### Example
     *
     * {@example testing/ts/matchers.ts region='toHaveCssClass'}
     */
    toHaveCssClass(expected: string): boolean;
    /**
     * Expect the element to have the given CSS styles.
     *
     * @usageNotes
     * ### Example
     *
     * {@example testing/ts/matchers.ts region='toHaveCssStyle'}
     */
    toHaveCssStyle(expected: {
        [k: string]: string;
    } | string): boolean;
    /**
     * Expect a class to implement the interface of the given class.
     *
     * @usageNotes
     * ### Example
     *
     * {@example testing/ts/matchers.ts region='toImplement'}
     */
    toImplement(expected: any): boolean;
    /**
     * Expect a component of the given type to show.
     */
    toContainComponent(expectedComponentType: Type<any>, expectationFailOutput?: any): boolean;
    /**
     * Invert the matchers.
     */
    not: NgMatchers<T>;
}
/**
 * Jasmine matching function with Angular matchers mixed in.
 *
 * ## Example
 *
 * {@example testing/ts/matchers.ts region='toHaveText'}
 */
declare const _expect: <T = any>(actual: T) => NgMatchers<T>;
export { _expect as expect };
