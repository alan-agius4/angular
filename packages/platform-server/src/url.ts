/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

/**
 * Parses and validates a URL if it is absolute or protocol-relative.
 * @returns The parsed WHATWG URL object if it is a valid absolute URL, or `null` if it is relative/non-absolute.
 * @throws An Error if the URL is structured as absolute but cannot be parsed by the WHATWG standard.
 */
export function parseAndValidateAbsoluteUrl(url: string): URL | null {
  const isAbsoluteOrProtocolRelative = /^[a-zA-Z][a-zA-Z0-9+.-]*:(\/\/|\\\\)/.test(url);
  if (isAbsoluteOrProtocolRelative) {
    try {
      return new URL(url);
    } catch {
      throw new Error(`Invalid URL: ${url}`);
    }
  }

  if (URL.canParse(url)) {
    return new URL(url);
  }

  return null;
}
