/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observer } from 'rxjs';
/**
 * Type that describes options that can be used to create an error
 * in `TestRequest`.
 */
type TestRequestErrorOptions = {
    headers?: HttpHeaders | {
        [name: string]: string | string[];
    };
    status?: number;
    statusText?: string;
};
/**
 * A mock requests that was received and is ready to be answered.
 *
 * This interface allows access to the underlying `HttpRequest`, and allows
 * responding with `HttpEvent`s or `HttpErrorResponse`s.
 *
 * @publicApi
 */
export declare class TestRequest {
    request: HttpRequest<any>;
    private observer;
    /**
     * Whether the request was cancelled after it was sent.
     */
    get cancelled(): boolean;
    constructor(request: HttpRequest<any>, observer: Observer<HttpEvent<any>>);
    /**
     * Resolve the request by returning a body plus additional HTTP information (such as response
     * headers) if provided.
     * If the request specifies an expected body type, the body is converted into the requested type.
     * Otherwise, the body is converted to `JSON` by default.
     *
     * Both successful and unsuccessful responses can be delivered via `flush()`.
     */
    flush(body: ArrayBuffer | Blob | boolean | string | number | Object | (boolean | string | number | Object | null)[] | null, opts?: {
        headers?: HttpHeaders | {
            [name: string]: string | string[];
        };
        status?: number;
        statusText?: string;
    }): void;
    /**
     * Resolve the request by returning an `ErrorEvent` (e.g. simulating a network failure).
     * @deprecated Http requests never emit an `ErrorEvent`. Please specify a `ProgressEvent`.
     */
    error(error: ErrorEvent, opts?: TestRequestErrorOptions): void;
    /**
     * Resolve the request by returning an `ProgressEvent` (e.g. simulating a network failure).
     */
    error(error: ProgressEvent, opts?: TestRequestErrorOptions): void;
    /**
     * Deliver an arbitrary `HttpEvent` (such as a progress event) on the response stream for this
     * request.
     */
    event(event: HttpEvent<any>): void;
}
export {};
