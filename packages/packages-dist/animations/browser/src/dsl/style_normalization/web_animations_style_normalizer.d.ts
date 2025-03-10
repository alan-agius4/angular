import { AnimationStyleNormalizer } from './animation_style_normalizer';
export declare class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
    normalizePropertyName(propertyName: string, errors: Error[]): string;
    normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: Error[]): string;
}
