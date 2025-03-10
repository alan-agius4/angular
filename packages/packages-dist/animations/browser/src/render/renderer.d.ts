/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Renderer2, RendererFactory2, RendererStyleFlags2, ɵAnimationRendererType as AnimationRendererType, type ListenerOptions } from '@angular/core';
import type { AnimationEngine } from './animation_engine_next';
type AnimationFactoryWithListenerCallback = RendererFactory2 & {
    scheduleListenerCallback: (count: number, fn: (e: any) => any, data: any) => void;
};
export declare class BaseAnimationRenderer implements Renderer2 {
    protected namespaceId: string;
    delegate: Renderer2;
    engine: AnimationEngine;
    private _onDestroy?;
    readonly ɵtype: AnimationRendererType.Regular;
    constructor(namespaceId: string, delegate: Renderer2, engine: AnimationEngine, _onDestroy?: (() => void) | undefined);
    get data(): {
        [key: string]: any;
    };
    destroyNode(node: any): void;
    destroy(): void;
    createElement(name: string, namespace?: string | null | undefined): any;
    createComment(value: string): any;
    createText(value: string): any;
    appendChild(parent: any, newChild: any): void;
    insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean): void;
    removeChild(parent: any, oldChild: any, isHostElement?: boolean): void;
    selectRootElement(selectorOrNode: any, preserveContent?: boolean): any;
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
    protected disableAnimations(element: any, value: boolean): void;
}
export declare class AnimationRenderer extends BaseAnimationRenderer implements Renderer2 {
    factory: AnimationFactoryWithListenerCallback;
    constructor(factory: AnimationFactoryWithListenerCallback, namespaceId: string, delegate: Renderer2, engine: AnimationEngine, onDestroy?: () => void);
    setProperty(el: any, name: string, value: any): void;
    listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => any, options?: ListenerOptions): () => void;
}
export {};
