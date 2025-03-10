/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import type { CompilationJob } from '../compilation';
/**
 * In some cases we need to add parentheses to expressions for them to be considered valid
 * JavaScript. This phase adds parentheses to cover such cases. Currently these cases are:
 *
 * 1. Unary operators in the base of an exponentiation expression. For example, `-2 ** 3` is not
 *    valid JavaScript, but `(-2) ** 3` is.
 * 2. When mixing nullish coalescing (`??`) and logical and/or operators (`&&`, `||`), we need to
 *    add parentheses. For example, `a ?? b && c` is not valid JavaScript, but `a ?? (b && c)` is.
 * 3. Safe property access that has been down-leveled into a ternary expression needs parentheses
 *    when used with nullish coalescing.
 */
export declare function requiredParentheses(job: CompilationJob): void;
