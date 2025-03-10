/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { NgZone } from '@angular/core';
export declare function dispatchEvent(element: any, eventType: any): Event;
export declare function createMouseEvent(eventType: string): MouseEvent;
export declare function el(html: string): HTMLElement;
export declare function stringifyElement(el: Element): string;
export declare function createNgZone(): NgZone;
export declare function isCommentNode(node: Node): boolean;
export declare function isTextNode(node: Node): boolean;
export declare function getContent(node: Node): Node;
export declare function templateAwareRoot(el: Node): any;
export declare function setCookie(name: string, value: string): void;
export declare function hasStyle(element: any, styleName: string, styleValue?: string | null): boolean;
export declare function hasClass(element: any, className: string): boolean;
export declare function sortedClassList(element: any): any[];
export declare function createTemplate(html: any): HTMLElement;
export declare function childNodesAsList(el: Node): any[];
