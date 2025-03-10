/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationRendererFactory as AnimationRendererFactory, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { NgZone, OnDestroy, Provider } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class InjectableAnimationEngine extends AnimationEngine implements OnDestroy {
    constructor(doc: Document, driver: AnimationDriver, normalizer: AnimationStyleNormalizer);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InjectableAnimationEngine, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InjectableAnimationEngine>;
}
export declare function instantiateDefaultStyleNormalizer(): WebAnimationsStyleNormalizer;
export declare function instantiateRendererFactory(renderer: DomRendererFactory2, engine: AnimationEngine, zone: NgZone): AnimationRendererFactory;
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export declare const BROWSER_NOOP_ANIMATIONS_PROVIDERS: Provider[];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export declare const BROWSER_ANIMATIONS_PROVIDERS: Provider[];
