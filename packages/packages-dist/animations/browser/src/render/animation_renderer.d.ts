import type { NgZone, RendererFactory2, RendererType2 } from '@angular/core';
import { AnimationEngine } from './animation_engine_next';
import { BaseAnimationRenderer } from './renderer';
export declare class AnimationRendererFactory implements RendererFactory2 {
    private delegate;
    private engine;
    private _zone;
    private _currentId;
    private _microtaskId;
    private _animationCallbacksBuffer;
    private _rendererCache;
    private _cdRecurDepth;
    constructor(delegate: RendererFactory2, engine: AnimationEngine, _zone: NgZone);
    createRenderer(hostElement: any, type: RendererType2): BaseAnimationRenderer;
    begin(): void;
    private _scheduleCountTask;
    end(): void;
    whenRenderingDone(): Promise<any>;
    /**
     * Used during HMR to clear any cached data about a component.
     * @param componentId ID of the component that is being replaced.
     */
    protected componentReplaced(componentId: string): void;
}
