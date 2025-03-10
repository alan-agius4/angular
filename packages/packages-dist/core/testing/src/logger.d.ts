import * as i0 from "@angular/core";
export declare class Log<T = string> {
    logItems: T[];
    constructor();
    add(value: T): void;
    fn(value: T): () => void;
    clear(): void;
    result(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Log<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Log<any>>;
}
