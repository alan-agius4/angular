/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { EnvironmentInjector, Type } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';
import type { Route } from '../models';
import type { NavigationTransition } from '../navigation_transition';
import type { RouterConfigLoader } from '../router_config_loader';
import type { UrlSerializer } from '../url_tree';
export declare function recognize(injector: EnvironmentInjector, configLoader: RouterConfigLoader, rootComponentType: Type<any> | null, config: Route[], serializer: UrlSerializer, paramsInheritanceStrategy: 'emptyOnly' | 'always'): MonoTypeOperatorFunction<NavigationTransition>;
