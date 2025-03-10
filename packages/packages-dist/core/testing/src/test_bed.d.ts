/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Component, Directive, InjectFlags, InjectOptions, NgModule, Pipe, PlatformRef, ProviderToken, Type, ɵDeferBlockBehavior as DeferBlockBehavior } from '@angular/core';
import { ComponentFixture } from './component_fixture';
import { MetadataOverride } from './metadata_override';
import { TestEnvironmentOptions, TestModuleMetadata } from './test_bed_common';
/**
 * Static methods implemented by the `TestBed`.
 *
 * @publicApi
 */
export interface TestBedStatic extends TestBed {
    new (...args: any[]): TestBed;
}
/**
 * @publicApi
 */
export interface TestBed {
    get platform(): PlatformRef;
    get ngModule(): Type<any> | Type<any>[];
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, options?: TestEnvironmentOptions): void;
    /**
     * Reset the providers for the test injector.
     */
    resetTestEnvironment(): void;
    resetTestingModule(): TestBed;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): void;
    configureTestingModule(moduleDef: TestModuleMetadata): TestBed;
    compileComponents(): Promise<any>;
    inject<T>(token: ProviderToken<T>, notFoundValue: undefined, options: InjectOptions & {
        optional?: false;
    }): T;
    inject<T>(token: ProviderToken<T>, notFoundValue: null | undefined, options: InjectOptions): T | null;
    inject<T>(token: ProviderToken<T>, notFoundValue?: T, options?: InjectOptions): T;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    inject<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    inject<T>(token: ProviderToken<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    /**
     * Runs the given function in the `EnvironmentInjector` context of `TestBed`.
     *
     * @see {@link EnvironmentInjector#runInContext}
     */
    runInInjectionContext<T>(fn: () => T): T;
    execute(tokens: any[], fn: Function, context?: any): any;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): TestBed;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): TestBed;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): TestBed;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): TestBed;
    overrideTemplate(component: Type<any>, template: string): TestBed;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
        multi?: boolean;
    }): TestBed;
    overrideProvider(token: any, provider: {
        useValue: any;
        multi?: boolean;
    }): TestBed;
    overrideProvider(token: any, provider: {
        useFactory?: Function;
        useValue?: any;
        deps?: any[];
        multi?: boolean;
    }): TestBed;
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): TestBed;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
    /**
     * Execute any pending effects.
     *
     * @developerPreview
     */
    flushEffects(): void;
}
/**
 * Returns a singleton of the `TestBed` class.
 *
 * @publicApi
 */
export declare function getTestBed(): TestBed;
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * TestBed is the primary api for writing unit tests for Angular applications and libraries.
 */
export declare class TestBedImpl implements TestBed {
    private static _INSTANCE;
    static get INSTANCE(): TestBedImpl;
    /**
     * Teardown options that have been configured at the environment level.
     * Used as a fallback if no instance-level options have been provided.
     */
    private static _environmentTeardownOptions;
    /**
     * "Error on unknown elements" option that has been configured at the environment level.
     * Used as a fallback if no instance-level option has been provided.
     */
    private static _environmentErrorOnUnknownElementsOption;
    /**
     * "Error on unknown properties" option that has been configured at the environment level.
     * Used as a fallback if no instance-level option has been provided.
     */
    private static _environmentErrorOnUnknownPropertiesOption;
    /**
     * Teardown options that have been configured at the `TestBed` instance level.
     * These options take precedence over the environment-level ones.
     */
    private _instanceTeardownOptions;
    /**
     * Defer block behavior option that specifies whether defer blocks will be triggered manually
     * or set to play through.
     */
    private _instanceDeferBlockBehavior;
    /**
     * "Error on unknown elements" option that has been configured at the `TestBed` instance level.
     * This option takes precedence over the environment-level one.
     */
    private _instanceErrorOnUnknownElementsOption;
    /**
     * "Error on unknown properties" option that has been configured at the `TestBed` instance level.
     * This option takes precedence over the environment-level one.
     */
    private _instanceErrorOnUnknownPropertiesOption;
    /**
     * Stores the previous "Error on unknown elements" option value,
     * allowing to restore it in the reset testing module logic.
     */
    private _previousErrorOnUnknownElementsOption;
    /**
     * Stores the previous "Error on unknown properties" option value,
     * allowing to restore it in the reset testing module logic.
     */
    private _previousErrorOnUnknownPropertiesOption;
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    static initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, options?: TestEnvironmentOptions): TestBed;
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    static resetTestEnvironment(): void;
    static configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): TestBed;
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    static configureTestingModule(moduleDef: TestModuleMetadata): TestBed;
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    static compileComponents(): Promise<any>;
    static overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): TestBed;
    static overrideComponent(component: Type<any>, override: MetadataOverride<Component>): TestBed;
    static overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): TestBed;
    static overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): TestBed;
    static overrideTemplate(component: Type<any>, template: string): TestBed;
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    static overrideTemplateUsingTestingModule(component: Type<any>, template: string): TestBed;
    static overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): TestBed;
    static overrideProvider(token: any, provider: {
        useValue: any;
    }): TestBed;
    static inject<T>(token: ProviderToken<T>, notFoundValue: undefined, options: InjectOptions & {
        optional?: false;
    }): T;
    static inject<T>(token: ProviderToken<T>, notFoundValue: null | undefined, options: InjectOptions): T | null;
    static inject<T>(token: ProviderToken<T>, notFoundValue?: T, options?: InjectOptions): T;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    static inject<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    static inject<T>(token: ProviderToken<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get(token: any, notFoundValue?: any): any;
    /**
     * Runs the given function in the `EnvironmentInjector` context of `TestBed`.
     *
     * @see {@link EnvironmentInjector#runInContext}
     */
    static runInInjectionContext<T>(fn: () => T): T;
    static createComponent<T>(component: Type<T>): ComponentFixture<T>;
    static resetTestingModule(): TestBed;
    static execute(tokens: any[], fn: Function, context?: any): any;
    static get platform(): PlatformRef;
    static get ngModule(): Type<any> | Type<any>[];
    static flushEffects(): void;
    platform: PlatformRef;
    ngModule: Type<any> | Type<any>[];
    private _compiler;
    private _testModuleRef;
    private _activeFixtures;
    /**
     * Internal-only flag to indicate whether a module
     * scoping queue has been checked and flushed already.
     * @nodoc
     */
    globalCompilationChecked: boolean;
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, options?: TestEnvironmentOptions): void;
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    resetTestEnvironment(): void;
    resetTestingModule(): this;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): this;
    configureTestingModule(moduleDef: TestModuleMetadata): this;
    compileComponents(): Promise<any>;
    inject<T>(token: ProviderToken<T>, notFoundValue: undefined, options: InjectOptions & {
        optional: true;
    }): T | null;
    inject<T>(token: ProviderToken<T>, notFoundValue?: T, options?: InjectOptions): T;
    inject<T>(token: ProviderToken<T>, notFoundValue: null, options?: InjectOptions): T | null;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    inject<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
    /** @deprecated use object-based flags (`InjectOptions`) instead. */
    inject<T>(token: ProviderToken<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    runInInjectionContext<T>(fn: () => T): T;
    execute(tokens: any[], fn: Function, context?: any): any;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): this;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): this;
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): this;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): this;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): this;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token: any, provider: {
        useFactory?: Function;
        useValue?: any;
        deps?: any[];
    }): this;
    overrideTemplate(component: Type<any>, template: string): TestBed;
    createComponent<T>(type: Type<T>): ComponentFixture<T>;
    private assertNotInstantiated;
    /**
     * Check whether the module scoping queue should be flushed, and flush it if needed.
     *
     * When the TestBed is reset, it clears the JIT module compilation queue, cancelling any
     * in-progress module compilation. This creates a potential hazard - the very first time the
     * TestBed is initialized (or if it's reset without being initialized), there may be pending
     * compilations of modules declared in global scope. These compilations should be finished.
     *
     * To ensure that globally declared modules have their components scoped properly, this function
     * is called whenever TestBed is initialized or reset. The _first_ time that this happens, prior
     * to any other operations, the scoping queue is flushed.
     */
    private checkGlobalCompilationFinished;
    private destroyActiveFixtures;
    shouldRethrowTeardownErrors(): boolean;
    shouldThrowErrorOnUnknownElements(): boolean;
    shouldThrowErrorOnUnknownProperties(): boolean;
    shouldTearDownTestingModule(): boolean;
    getDeferBlockBehavior(): DeferBlockBehavior;
    tearDownTestingModule(): void;
    /**
     * Execute any pending effects.
     *
     * @developerPreview
     */
    flushEffects(): void;
}
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * @publicApi
 */
export declare const TestBed: TestBedStatic;
/**
 * Allows injecting dependencies in `beforeEach()` and `it()`. Note: this function
 * (imported from the `@angular/core/testing` package) can **only** be used to inject dependencies
 * in tests. To inject dependencies in your application code, use the [`inject`](api/core/inject)
 * function from the `@angular/core` package instead.
 *
 * Example:
 *
 * ```ts
 * beforeEach(inject([Dependency, AClass], (dep, object) => {
 *   // some code that uses `dep` and `object`
 *   // ...
 * }));
 *
 * it('...', inject([AClass], (object) => {
 *   object.doSomething();
 *   expect(...);
 * })
 * ```
 *
 * @publicApi
 */
export declare function inject(tokens: any[], fn: Function): () => any;
/**
 * @publicApi
 */
export declare class InjectSetupWrapper {
    private _moduleDef;
    constructor(_moduleDef: () => TestModuleMetadata);
    private _addModule;
    inject(tokens: any[], fn: Function): () => any;
}
/**
 * @publicApi
 */
export declare function withModule(moduleDef: TestModuleMetadata): InjectSetupWrapper;
export declare function withModule(moduleDef: TestModuleMetadata, fn: Function): () => any;
