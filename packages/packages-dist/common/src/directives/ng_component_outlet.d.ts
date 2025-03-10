/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { DoCheck, Injector, NgModuleFactory, OnChanges, OnDestroy, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Instantiates a {@link /api/core/Component Component} type and inserts its Host View into the current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will be destroyed.
 *
 * @usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInputs`: Optional component inputs object, which will be bind to the
 * component.
 *
 * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if it exists.
 *
 * * `ngComponentOutletNgModule`: Optional NgModule class reference to allow loading another
 * module dynamically, then loading a component from that module.
 *
 * * `ngComponentOutletNgModuleFactory`: Deprecated config option that allows providing optional
 * NgModule factory to allow loading another module dynamically, then loading a component from that
 * module. Use `ngComponentOutletNgModule` instead.
 *
 * ### Syntax
 *
 * Simple
 * ```html
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * With inputs
 * ```html
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   inputs: inputsExpression;">
 * </ng-container>
 * ```
 *
 * Customized injector/content
 * ```html
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized NgModule reference
 * ```html
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModule: ngModuleClass;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 *
 * @publicApi
 * @ngModule CommonModule
 */
export declare class NgComponentOutlet<T = any> implements OnChanges, DoCheck, OnDestroy {
    private _viewContainerRef;
    /** Component that should be rendered in the outlet. */
    ngComponentOutlet: Type<any> | null;
    ngComponentOutletInputs?: Record<string, unknown>;
    ngComponentOutletInjector?: Injector;
    ngComponentOutletContent?: any[][];
    ngComponentOutletNgModule?: Type<any>;
    /**
     * @deprecated This input is deprecated, use `ngComponentOutletNgModule` instead.
     */
    ngComponentOutletNgModuleFactory?: NgModuleFactory<any>;
    private _componentRef;
    private _moduleRef;
    /**
     * A helper data structure that allows us to track inputs that were part of the
     * ngComponentOutletInputs expression. Tracking inputs is necessary for proper removal of ones
     * that are no longer referenced.
     */
    private _inputsUsed;
    /**
     * Gets the instance of the currently-rendered component.
     * Will be null if no component has been rendered.
     */
    get componentInstance(): T | null;
    constructor(_viewContainerRef: ViewContainerRef);
    private _needToReCreateNgModuleInstance;
    private _needToReCreateComponentInstance;
    /** @nodoc */
    ngOnChanges(changes: SimpleChanges): void;
    /** @nodoc */
    ngDoCheck(): void;
    /** @nodoc */
    ngOnDestroy(): void;
    private _applyInputStateDiff;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgComponentOutlet<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgComponentOutlet<any>, "[ngComponentOutlet]", ["ngComponentOutlet"], { "ngComponentOutlet": { "alias": "ngComponentOutlet"; "required": false; }; "ngComponentOutletInputs": { "alias": "ngComponentOutletInputs"; "required": false; }; "ngComponentOutletInjector": { "alias": "ngComponentOutletInjector"; "required": false; }; "ngComponentOutletContent": { "alias": "ngComponentOutletContent"; "required": false; }; "ngComponentOutletNgModule": { "alias": "ngComponentOutletNgModule"; "required": false; }; "ngComponentOutletNgModuleFactory": { "alias": "ngComponentOutletNgModuleFactory"; "required": false; }; }, {}, never, never, true, never>;
}
