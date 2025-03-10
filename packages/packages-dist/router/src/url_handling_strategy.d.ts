import { UrlTree } from './url_tree';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @publicApi
 */
export declare abstract class UrlHandlingStrategy {
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     */
    abstract shouldProcessUrl(url: UrlTree): boolean;
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     */
    abstract extract(url: UrlTree): UrlTree;
    /**
     * Merges the URL fragment with the rest of the URL.
     */
    abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<UrlHandlingStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UrlHandlingStrategy>;
}
/**
 * @publicApi
 */
export declare class DefaultUrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean;
    extract(url: UrlTree): UrlTree;
    merge(newUrlPart: UrlTree, wholeUrl: UrlTree): UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultUrlHandlingStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DefaultUrlHandlingStrategy>;
}
