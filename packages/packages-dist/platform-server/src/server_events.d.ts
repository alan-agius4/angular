import { type ListenerOptions } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class ServerEventManagerPlugin extends EventManagerPlugin {
    private doc;
    constructor(doc: any);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function, options?: ListenerOptions): Function;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerEventManagerPlugin, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServerEventManagerPlugin>;
}
