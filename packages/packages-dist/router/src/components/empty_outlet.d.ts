import { Route } from '../models';
import * as i0 from "@angular/core";
export { ɵEmptyOutletComponent as EmptyOutletComponent };
/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
export declare class ɵEmptyOutletComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ɵEmptyOutletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ɵEmptyOutletComponent, "ng-component", ["emptyRouterOutlet"], {}, {}, never, never, true, never>;
}
/**
 * Makes a copy of the config and adds any default required properties.
 */
export declare function standardizeConfig(r: Route): Route;
