/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Observable } from 'rxjs';
export declare const ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
/**
 * An event emitted when the service worker has checked the version of the app on the server and it
 * didn't find a new version that it doesn't have already downloaded.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}

 *
 * @publicApi
 */
export interface NoNewVersionDetectedEvent {
    type: 'NO_NEW_VERSION_DETECTED';
    version: {
        hash: string;
        appData?: Object;
    };
}
/**
 * An event emitted when the service worker has detected a new version of the app on the server and
 * is about to start downloading it.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}

 *
 * @publicApi
 */
export interface VersionDetectedEvent {
    type: 'VERSION_DETECTED';
    version: {
        hash: string;
        appData?: object;
    };
}
/**
 * An event emitted when the installation of a new version failed.
 * It may be used for logging/monitoring purposes.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}
 *a
 * @publicApi
 */
export interface VersionInstallationFailedEvent {
    type: 'VERSION_INSTALLATION_FAILED';
    version: {
        hash: string;
        appData?: object;
    };
    error: string;
}
/**
 * An event emitted when a new version of the app is available.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}

 *
 * @publicApi
 */
export interface VersionReadyEvent {
    type: 'VERSION_READY';
    currentVersion: {
        hash: string;
        appData?: object;
    };
    latestVersion: {
        hash: string;
        appData?: object;
    };
}
/**
 * A union of all event types that can be emitted by
 * {@link SwUpdate#versionUpdates}.
 *
 * @publicApi
 */
export type VersionEvent = VersionDetectedEvent | VersionInstallationFailedEvent | VersionReadyEvent | NoNewVersionDetectedEvent;
/**
 * An event emitted when the version of the app used by the service worker to serve this client is
 * in a broken state that cannot be recovered from and a full page reload is required.
 *
 * For example, the service worker may not be able to retrieve a required resource, neither from the
 * cache nor from the server. This could happen if a new version is deployed to the server and the
 * service worker cache has been partially cleaned by the browser, removing some files of a previous
 * app version but not all.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}

 *
 * @publicApi
 */
export interface UnrecoverableStateEvent {
    type: 'UNRECOVERABLE_STATE';
    reason: string;
}
/**
 * An event emitted when a `PushEvent` is received by the service worker.
 */
export interface PushEvent {
    type: 'PUSH';
    data: any;
}
export type IncomingEvent = UnrecoverableStateEvent | VersionEvent;
export interface TypedEvent {
    type: string;
}
/**
 * @publicApi
 */
export declare class NgswCommChannel {
    private serviceWorker;
    readonly worker: Observable<ServiceWorker>;
    readonly registration: Observable<ServiceWorkerRegistration>;
    readonly events: Observable<TypedEvent>;
    constructor(serviceWorker: ServiceWorkerContainer | undefined);
    postMessage(action: string, payload: Object): Promise<void>;
    postMessageWithOperation(type: string, payload: Object, operationNonce: number): Promise<boolean>;
    generateNonce(): number;
    eventsOfType<T extends TypedEvent>(type: T['type'] | T['type'][]): Observable<T>;
    nextEventOfType<T extends TypedEvent>(type: T['type']): Observable<T>;
    waitForOperationCompleted(nonce: number): Promise<boolean>;
    get isEnabled(): boolean;
}
