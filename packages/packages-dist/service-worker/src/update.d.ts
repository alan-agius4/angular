import { Observable } from 'rxjs';
import { NgswCommChannel, UnrecoverableStateEvent, VersionEvent } from './low_level';
import * as i0 from "@angular/core";
/**
 * Subscribe to update notifications from the Service Worker, trigger update
 * checks, and forcibly activate updates.
 *
 * @see {@link /ecosystem/service-workers/communications Service Worker Communication Guide}
 *
 * @publicApi
 */
export declare class SwUpdate {
    private sw;
    /**
     * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
     *
     * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
     * version fails.
     *
     * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
     * activation.
     */
    readonly versionUpdates: Observable<VersionEvent>;
    /**
     * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
     * worker to serve this client is in a broken state that cannot be recovered from without a full
     * page reload.
     */
    readonly unrecoverable: Observable<UnrecoverableStateEvent>;
    /**
     * True if the Service Worker is enabled (supported by the browser and enabled via
     * `ServiceWorkerModule`).
     */
    get isEnabled(): boolean;
    constructor(sw: NgswCommChannel);
    /**
     * Checks for an update and waits until the new version is downloaded from the server and ready
     * for activation.
     *
     * @returns a promise that
     * - resolves to `true` if a new version was found and is ready to be activated.
     * - resolves to `false` if no new version was found
     * - rejects if any error occurs
     */
    checkForUpdate(): Promise<boolean>;
    /**
     * Updates the current client (i.e. browser tab) to the latest version that is ready for
     * activation.
     *
     * In most cases, you should not use this method and instead should update a client by reloading
     * the page.
     *
     * <div class="docs-alert docs-alert-important">
     *
     * Updating a client without reloading can easily result in a broken application due to a version
     * mismatch between the application shell and other page resources,
     * such as lazy-loaded chunks, whose filenames may change between
     * versions.
     *
     * Only use this method, if you are certain it is safe for your specific use case.
     *
     * </div>
     *
     * @returns a promise that
     *  - resolves to `true` if an update was activated successfully
     *  - resolves to `false` if no update was available (for example, the client was already on the
     *    latest version).
     *  - rejects if any error occurs
     */
    activateUpdate(): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwUpdate, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SwUpdate>;
}
