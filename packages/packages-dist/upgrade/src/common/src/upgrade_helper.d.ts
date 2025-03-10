/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ElementRef, Injector, SimpleChanges } from '@angular/core';
import { IAugmentedJQuery, IController, IDirective, IInjectorService, ILinkFn, IScope, SingleOrListOrMap } from './angular1';
import { TrustedHTML } from './security/trusted_types_defs';
export interface IBindingDestination {
    [key: string]: any;
    $onChanges?: (changes: SimpleChanges) => void;
}
export interface IControllerInstance extends IBindingDestination {
    $doCheck?: () => void;
    $onDestroy?: () => void;
    $onInit?: () => void;
    $postLink?: () => void;
}
export declare class UpgradeHelper {
    private name;
    readonly $injector: IInjectorService;
    readonly element: Element;
    readonly $element: IAugmentedJQuery;
    readonly directive: IDirective;
    private readonly $compile;
    private readonly $controller;
    constructor(injector: Injector, name: string, elementRef: ElementRef, directive?: IDirective);
    static getDirective($injector: IInjectorService, name: string): IDirective;
    static getTemplate($injector: IInjectorService, directive: IDirective, fetchRemoteTemplate?: boolean, $element?: IAugmentedJQuery): string | TrustedHTML | Promise<string | TrustedHTML>;
    buildController(controllerType: IController, $scope: IScope): any;
    compileTemplate(template?: string | TrustedHTML): ILinkFn;
    onDestroy($scope: IScope, controllerInstance?: any): void;
    prepareTransclusion(): ILinkFn | undefined;
    resolveAndBindRequiredControllers(controllerInstance: IControllerInstance | null): SingleOrListOrMap<IControllerInstance> | null;
    private compileHtml;
    private extractChildNodes;
    private getDirectiveRequire;
    private resolveRequire;
}
