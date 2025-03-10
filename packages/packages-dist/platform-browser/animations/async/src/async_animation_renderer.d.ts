/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ɵAnimationEngine as AnimationEngine, ɵAnimationRendererFactory as AnimationRendererFactory } from '@angular/animations/browser';
import { NgZone, OnDestroy, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2, ɵAnimationRendererType as AnimationRendererType, InjectionToken, type ListenerOptions } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AsyncAnimationRendererFactory implements OnDestroy, RendererFactory2 {
    private doc;
    private delegate;
    private zone;
    private animationType;
    private moduleImpl?;
    private _rendererFactoryPromise;
    private scheduler;
    private readonly injector;
    private readonly loadingSchedulerFn;
    private _engine?;
    /**
     *
     * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
     */
    constructor(doc: Document, delegate: RendererFactory2, zone: NgZone, animationType: 'animations' | 'noop', moduleImpl?: Promise<{
        ɵcreateEngine: (type: "animations" | "noop", doc: Document) => AnimationEngine;
        ɵAnimationRendererFactory: typeof AnimationRendererFactory;
    }> | undefined);
    /** @nodoc */
    ngOnDestroy(): void;
    /**
     * This method is delegating the renderer creation to the factories.
     * It uses default factory while the animation factory isn't loaded
     * and will rely on the animation factory once it is loaded.
     *
     * Calling this method will trigger as side effect the loading of the animation module
     * if the renderered component uses animations.
     */
    createRenderer(hostElement: any, rendererType: RendererType2): Renderer2;
    begin(): void;
    end(): void;
    whenRenderingDone?(): Promise<any>;
    /**
     * Used during HMR to clear any cached data about a component.
     * @param componentId ID of the component that is being replaced.
     */
    protected componentReplaced(componentId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncAnimationRendererFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncAnimationRendererFactory>;
}
/**
 * The class allows to dynamicly switch between different renderer implementations
 * by changing the delegate renderer.
 */
export declare class DynamicDelegationRenderer implements Renderer2 {
    private delegate;
    private replay;
    readonly ɵtype = AnimationRendererType.Delegated;
    constructor(delegate: Renderer2);
    use(impl: Renderer2): void;
    get data(): {
        [key: string]: any;
    };
    destroy(): void;
    createElement(name: string, namespace?: string | null): any;
    createComment(value: string): void;
    createText(value: string): any;
    get destroyNode(): ((node: any) => void) | null;
    appendChild(parent: any, newChild: any): void;
    insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean | undefined): void;
    removeChild(parent: any, oldChild: any, isHostElement?: boolean | undefined): void;
    selectRootElement(selectorOrNode: any, preserveContent?: boolean | undefined): any;
    parentNode(node: any): any;
    nextSibling(node: any): any;
    setAttribute(el: any, name: string, value: string, namespace?: string | null | undefined): void;
    removeAttribute(el: any, name: string, namespace?: string | null | undefined): void;
    addClass(el: any, name: string): void;
    removeClass(el: any, name: string): void;
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2 | undefined): void;
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2 | undefined): void;
    setProperty(el: any, name: string, value: any): void;
    setValue(node: any, value: string): void;
    listen(target: any, eventName: string, callback: (event: any) => boolean | void, options?: ListenerOptions): () => void;
    private shouldReplay;
}
/**
 * Provides a custom scheduler function for the async loading of the animation package.
 *
 * Private token for investigation purposes
 */
export declare const ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN: InjectionToken<(<T>(loadFn: () => T) => T)>;
