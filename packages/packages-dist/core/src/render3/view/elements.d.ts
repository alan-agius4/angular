/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { TNode, type TElementNode } from '../interfaces/node';
import type { LView, TView } from '../interfaces/view';
import { type DirectiveMatcherStrategy } from './directives';
export declare function elementStartFirstCreatePass(index: number, tView: TView, lView: LView, name: string, directiveMatcher: DirectiveMatcherStrategy, bindingsEnabled: boolean, attrsIndex?: number | null, localRefsIndex?: number): TElementNode;
export declare function elementEndFirstCreatePass(tView: TView, tNode: TNode): void;
