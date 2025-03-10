import * as i0 from "@angular/core";
export declare const RETHROW_APPLICATION_ERRORS_DEFAULT = true;
export declare class TestBedApplicationErrorHandler {
    private readonly zone;
    private readonly userErrorHandler;
    readonly whenStableRejectFunctions: Set<(e: unknown) => void>;
    handleError(e: unknown): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TestBedApplicationErrorHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TestBedApplicationErrorHandler>;
}
