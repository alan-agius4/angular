/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * @fileoverview
 * A module to facilitate use of a Trusted Types policy internally within
 * the upgrade package. It lazily constructs the Trusted Types policy, providing
 * helper utilities for promoting strings to Trusted Types. When Trusted Types
 * are not available, strings are used as a fallback.
 * @security All use of this module is security-sensitive and should go through
 * security review.
 */
import { TrustedHTML } from './trusted_types_defs';
/**
 * Unsafely promote a legacy AngularJS template to a TrustedHTML, falling back
 * to strings when Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, the template string should
 * always be under full control of the application author, as untrusted input
 * can cause an XSS vulnerability.
 */
export declare function trustedHTMLFromLegacyTemplate(html: string): TrustedHTML | string;
