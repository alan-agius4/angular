/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as o from '../../../../../output/output_ast';
import { ParseSourceSpan } from '../../../../../parse_util';
import { SecurityContext } from '../../../../../core';
import { OpKind } from '../enums';
import { Op, XrefId } from '../operations';
import { ConsumesVarsTrait } from '../traits';
import type { Interpolation, UpdateOp } from './update';
/**
 * Logical operation representing a host binding to a property.
 */
export interface HostPropertyOp extends Op<UpdateOp>, ConsumesVarsTrait {
    kind: OpKind.HostProperty;
    name: string;
    expression: o.Expression | Interpolation;
    isAnimationTrigger: boolean;
    i18nContext: XrefId | null;
    securityContext: SecurityContext | SecurityContext[];
    sanitizer: o.Expression | null;
    sourceSpan: ParseSourceSpan | null;
}
export declare function createHostPropertyOp(name: string, expression: o.Expression | Interpolation, isAnimationTrigger: boolean, i18nContext: XrefId | null, securityContext: SecurityContext | SecurityContext[], sourceSpan: ParseSourceSpan | null): HostPropertyOp;
