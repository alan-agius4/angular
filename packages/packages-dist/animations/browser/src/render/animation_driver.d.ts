/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationPlayer } from '@angular/animations';
import * as i0 from "@angular/core";
/**
 * @publicApi
 *
 * `AnimationDriver` implentation for Noop animations
 */
export declare class NoopAnimationDriver implements AnimationDriver {
    /**
     * @returns Whether `prop` is a valid CSS property
     */
    validateStyleProperty(prop: string): boolean;
    /**
     *
     * @returns Whether elm1 contains elm2.
     */
    containsElement(elm1: any, elm2: any): boolean;
    /**
     * @returns Rhe parent of the given element or `null` if the element is the `document`
     */
    getParentElement(element: unknown): unknown;
    /**
     * @returns The result of the query selector on the element. The array will contain up to 1 item
     *     if `multi` is  `false`.
     */
    query(element: any, selector: string, multi: boolean): any[];
    /**
     * @returns The `defaultValue` or empty string
     */
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    /**
     * @returns An `NoopAnimationPlayer`
     */
    animate(element: any, keyframes: Array<Map<string, string | number>>, duration: number, delay: number, easing: string, previousPlayers?: any[], scrubberAccessRequested?: boolean): AnimationPlayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoopAnimationDriver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NoopAnimationDriver>;
}
/**
 * @publicApi
 */
export declare abstract class AnimationDriver {
    /**
     * @deprecated Use the NoopAnimationDriver class.
     */
    static NOOP: AnimationDriver;
    abstract validateStyleProperty(prop: string): boolean;
    abstract validateAnimatableStyleProperty?: (prop: string) => boolean;
    abstract containsElement(elm1: any, elm2: any): boolean;
    /**
     * Obtains the parent element, if any. `null` is returned if the element does not have a parent.
     */
    abstract getParentElement(element: unknown): unknown;
    abstract query(element: any, selector: string, multi: boolean): any[];
    abstract computeStyle(element: any, prop: string, defaultValue?: string): string;
    abstract animate(element: any, keyframes: Array<Map<string, string | number>>, duration: number, delay: number, easing?: string | null, previousPlayers?: any[], scrubberAccessRequested?: boolean): any;
}
