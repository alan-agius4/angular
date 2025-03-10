import { EnvironmentInjector, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBackend, HttpHandler } from './backend';
import { HttpRequest } from './request';
import { HttpEvent } from './response';
import * as i0 from "@angular/core";
/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * @publicApi
 *
 * @see [HTTP Guide](guide/http/interceptors)
 * @see {@link HttpInterceptorFn}
 *
 * @usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector.
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
 * interceptors provided in the root module.
 */
export interface HttpInterceptor {
    /**
     * Identifies and handles a given HTTP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
/**
 * Represents the next interceptor in an interceptor chain, or the real backend if there are no
 * further interceptors.
 *
 * Most interceptors will delegate to this function, and either modify the outgoing request or the
 * response when it arrives. Within the scope of the current request, however, this function may be
 * called any number of times, for any number of downstream requests. Such downstream requests need
 * not be to the same URL or even the same origin as the current request. It is also valid to not
 * call the downstream handler at all, and process the current request entirely within the
 * interceptor.
 *
 * This function should only be called within the scope of the request that's currently being
 * intercepted. Once that request is complete, this downstream handler function should not be
 * called.
 *
 * @publicApi
 *
 * @see [HTTP Guide](guide/http/interceptors)
 */
export type HttpHandlerFn = (req: HttpRequest<unknown>) => Observable<HttpEvent<unknown>>;
/**
 * An interceptor for HTTP requests made via `HttpClient`.
 *
 * `HttpInterceptorFn`s are middleware functions which `HttpClient` calls when a request is made.
 * These functions have the opportunity to modify the outgoing request or any response that comes
 * back, as well as block, redirect, or otherwise change the request or response semantics.
 *
 * An `HttpHandlerFn` representing the next interceptor (or the backend which will make a real HTTP
 * request) is provided. Most interceptors will delegate to this function, but that is not required
 * (see `HttpHandlerFn` for more details).
 *
 * `HttpInterceptorFn`s are executed in an [injection context](guide/di/dependency-injection-context).
 * They have access to `inject()` via the `EnvironmentInjector` from which they were configured.
 *
 * @see [HTTP Guide](guide/http/interceptors)
 * @see {@link withInterceptors}
 *
 * @usageNotes
 * Here is a noop interceptor that passes the request through without modifying it:
 * ```ts
 * export const noopInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
 * HttpHandlerFn) => {
 *   return next(modifiedReq);
 * };
 * ```
 *
 * If you want to alter a request, clone it first and modify the clone before passing it to the
 * `next()` handler function.
 *
 * Here is a basic interceptor that adds a bearer token to the headers
 * ```ts
 * export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
 * HttpHandlerFn) => {
 *    const userToken = 'MY_TOKEN'; const modifiedReq = req.clone({
 *      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
 *    });
 *
 *    return next(modifiedReq);
 * };
 * ```
 */
export type HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>>;
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
export declare const HTTP_INTERCEPTORS: InjectionToken<readonly HttpInterceptor[]>;
/**
 * A multi-provided token of `HttpInterceptorFn`s.
 */
export declare const HTTP_INTERCEPTOR_FNS: InjectionToken<readonly HttpInterceptorFn[]>;
/**
 * A multi-provided token of `HttpInterceptorFn`s that are only set in root.
 */
export declare const HTTP_ROOT_INTERCEPTOR_FNS: InjectionToken<readonly HttpInterceptorFn[]>;
export declare const REQUESTS_CONTRIBUTE_TO_STABILITY: InjectionToken<boolean>;
/**
 * Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
 * class-based interceptors and runs the request through it.
 */
export declare function legacyInterceptorFnFactory(): HttpInterceptorFn;
/** Internal function to reset the flag in tests */
export declare function resetFetchBackendWarningFlag(): void;
export declare class HttpInterceptorHandler extends HttpHandler {
    private backend;
    private injector;
    private chain;
    private readonly pendingTasks;
    private readonly contributeToStability;
    constructor(backend: HttpBackend, injector: EnvironmentInjector);
    handle(initialRequest: HttpRequest<any>): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpInterceptorHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpInterceptorHandler>;
}
