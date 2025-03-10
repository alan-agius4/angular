import { isSignal } from '../reactivity/api';
import { applyChanges } from './change_detection_utils';
import { getDeferBlocks } from './defer';
import { getComponent, getContext, getDirectiveMetadata, getDirectives, getHostElement, getInjector, getListeners, getOwningComponent, getRootComponents } from './discovery_utils';
import { getDependenciesFromInjectable, getInjectorMetadata, getInjectorProviders, getInjectorResolutionPath } from './injector_discovery_utils';
import { getSignalGraph } from './signal_debug';
/**
 * This file introduces series of globally accessible debug tools
 * to allow for the Angular debugging story to function.
 *
 * To see this in action run the following command:
 *
 *   bazel run //packages/core/test/bundling/todo:devserver
 *
 *  Then load `localhost:5432` and start using the console tools.
 */
/**
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 * */
export declare const GLOBAL_PUBLISH_EXPANDO_KEY = "ng";
interface NgGlobalPublishUtils {
    ɵgetLoadedRoutes(route: any): any;
}
declare const globalUtilsFunctions: {
    /**
     * Warning: functions that start with `ɵ` are considered *INTERNAL* and should not be relied upon
     * in application's code. The contract of those functions might be changed in any release and/or a
     * function can be removed completely.
     */
    ɵgetDependenciesFromInjectable: typeof getDependenciesFromInjectable;
    ɵgetInjectorProviders: typeof getInjectorProviders;
    ɵgetInjectorResolutionPath: typeof getInjectorResolutionPath;
    ɵgetInjectorMetadata: typeof getInjectorMetadata;
    ɵsetProfiler: (profiler: import("@angular/core").ɵProfiler | null) => void;
    ɵgetSignalGraph: typeof getSignalGraph;
    ɵgetDeferBlocks: typeof getDeferBlocks;
    getDirectiveMetadata: typeof getDirectiveMetadata;
    getComponent: typeof getComponent;
    getContext: typeof getContext;
    getListeners: typeof getListeners;
    getOwningComponent: typeof getOwningComponent;
    getHostElement: typeof getHostElement;
    getInjector: typeof getInjector;
    getRootComponents: typeof getRootComponents;
    getDirectives: typeof getDirectives;
    applyChanges: typeof applyChanges;
    isSignal: typeof isSignal;
};
type CoreGlobalUtilsFunctions = keyof typeof globalUtilsFunctions;
type ExternalGlobalUtilsFunctions = keyof NgGlobalPublishUtils;
/**
 * Publishes a collection of default debug tools onto`window.ng`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 */
export declare function publishDefaultGlobalUtils(): void;
/**
 * Default debug tools available under `window.ng`.
 */
export type GlobalDevModeUtils = {
    [GLOBAL_PUBLISH_EXPANDO_KEY]: typeof globalUtilsFunctions;
};
/**
 * Publishes the given function to `window.ng` so that it can be
 * used from the browser console when an application is not in production.
 */
export declare function publishGlobalUtil<K extends CoreGlobalUtilsFunctions>(name: K, fn: (typeof globalUtilsFunctions)[K]): void;
/**
 * Publishes the given function to `window.ng` from package other than @angular/core
 * So that it can be used from the browser console when an application is not in production.
 */
export declare function publishExternalGlobalUtil<K extends ExternalGlobalUtilsFunctions>(name: K, fn: NgGlobalPublishUtils[K]): void;
export {};
