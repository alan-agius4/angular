import { OnDestroy } from './interface/lifecycle_hooks';
import * as i0 from "./r3_symbols";
export declare class ImagePerformanceWarning implements OnDestroy {
    private window;
    private observer;
    private options;
    private lcpImageUrl?;
    start(): void;
    ngOnDestroy(): void;
    private initPerformanceObserver;
    private scanImages;
    private isOversized;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagePerformanceWarning, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImagePerformanceWarning>;
}
