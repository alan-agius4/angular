import { ApplicationRef } from './application_ref';
import * as i0 from "../r3_symbols";
/**
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command. Eagerly injects
 * `ApplicationRef` to instantiate it.
 *
 * @publicApi
 */
export declare class ApplicationModule {
    constructor(appRef: ApplicationRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ApplicationModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ApplicationModule>;
}
