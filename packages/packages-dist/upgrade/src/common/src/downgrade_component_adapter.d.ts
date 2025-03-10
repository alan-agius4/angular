/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ComponentFactory, ComponentRef, Injector } from '@angular/core';
import { IAttributes, IAugmentedJQuery, ICompileService, INgModelController, IParseService, IScope } from './angular1';
export declare class DowngradeComponentAdapter {
    private element;
    private attrs;
    private scope;
    private ngModel;
    private parentInjector;
    private $compile;
    private $parse;
    private componentFactory;
    private wrapCallback;
    private readonly unsafelyOverwriteSignalInputs;
    private implementsOnChanges;
    private inputChangeCount;
    private inputChanges;
    private componentScope;
    constructor(element: IAugmentedJQuery, attrs: IAttributes, scope: IScope, ngModel: INgModelController, parentInjector: Injector, $compile: ICompileService, $parse: IParseService, componentFactory: ComponentFactory<any>, wrapCallback: <T>(cb: () => T) => () => T, unsafelyOverwriteSignalInputs: boolean);
    compileContents(): Node[][];
    createComponentAndSetup(projectableNodes: Node[][], manuallyAttachView?: boolean, propagateDigest?: boolean): ComponentRef<any>;
    private createComponent;
    private setupInputs;
    private setupOutputs;
    private subscribeToOutput;
    private registerCleanup;
    private updateInput;
    private groupProjectableNodes;
}
/**
 * Group a set of DOM nodes into `ngContent` groups, based on the given content selectors.
 */
export declare function groupNodesBySelector(ngContentSelectors: string[], nodes: Node[]): Node[][];
