/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { LContainer } from '../render3/interfaces/container';
import { RNode } from '../render3/interfaces/renderer_dom';
import { DehydratedContainerView, SerializedContainerView } from './interfaces';
/**
 * Given a current DOM node and a serialized information about the views
 * in a container, walks over the DOM structure, collecting the list of
 * dehydrated views.
 */
export declare function locateDehydratedViewsInContainer(currentRNode: RNode, serializedViews: SerializedContainerView[]): [RNode, DehydratedContainerView[]];
export declare function enableFindMatchingDehydratedViewImpl(): void;
export declare function findMatchingDehydratedView(lContainer: LContainer, template: string | null): DehydratedContainerView | null;
