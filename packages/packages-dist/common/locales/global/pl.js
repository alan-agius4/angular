/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY.
(function (global) {
  global.ng ??= {};
  global.ng.common ??= {};
  global.ng.common.locales ??= {};
  const u = undefined;
  function plural(val) {
    const n = val,
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;

    if (i === 1 && v === 0) return 1;
    if (
      v === 0 &&
      i % 10 === Math.floor(i % 10) &&
      i % 10 >= 2 &&
      i % 10 <= 4 &&
      !(i % 100 >= 12 && i % 100 <= 14)
    )
      return 3;
    if (
      (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1) ||
      (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9) ||
      (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
    )
      return 4;
    return 5;
  }
  global.ng.common.locales['pl'] = [
    'pl',
    [['a', 'p'], ['AM', 'PM'], u],
    u,
    [
      ['n', 'p', 'w', 'ś', 'c', 'p', 's'],
      ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
      ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
      ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
    ],
    [
      ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
      ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
      ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
      ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
    ],
    [
      ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'],
      ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
      [
        'stycznia',
        'lutego',
        'marca',
        'kwietnia',
        'maja',
        'czerwca',
        'lipca',
        'sierpnia',
        'września',
        'października',
        'listopada',
        'grudnia',
      ],
    ],
    [
      ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'],
      ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
      [
        'styczeń',
        'luty',
        'marzec',
        'kwiecień',
        'maj',
        'czerwiec',
        'lipiec',
        'sierpień',
        'wrzesień',
        'październik',
        'listopad',
        'grudzień',
      ],
    ],
    [['p.n.e.', 'n.e.'], u, ['przed naszą erą', 'naszej ery']],
    1,
    [6, 0],
    ['d.MM.y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    ['{1}, {0}', u, '{1} {0}', u],
    [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
    'PLN',
    'zł',
    'złoty polski',
    {
      'AUD': [u, '$'],
      'CAD': [u, '$'],
      'CNY': [u, '¥'],
      'GBP': [u, '£'],
      'HKD': [u, '$'],
      'ILS': [u, '₪'],
      'INR': [u, '₹'],
      'JPY': [u, '¥'],
      'KRW': [u, '₩'],
      'MXN': [u, '$'],
      'NZD': [u, '$'],
      'PHP': [u, '₱'],
      'PLN': ['zł'],
      'RON': [u, 'lej'],
      'TWD': [u, 'NT$'],
      'USD': [u, '$'],
      'VND': [u, '₫'],
    },
    'ltr',
    plural,
    [
      [
        ['o półn.', 'w poł.', 'rano', 'przed poł.', 'po poł.', 'wiecz.', 'w nocy'],
        [
          'o północy',
          'w południe',
          'rano',
          'przed południem',
          'po południu',
          'wieczorem',
          'w nocy',
        ],
        u,
      ],
      [
        ['półn.', 'poł.', 'rano', 'przedpoł.', 'popoł.', 'wiecz.', 'noc'],
        ['północ', 'południe', 'rano', 'przedpołudnie', 'popołudnie', 'wieczór', 'noc'],
        u,
      ],
      [
        '00:00',
        '12:00',
        ['06:00', '10:00'],
        ['10:00', '12:00'],
        ['12:00', '18:00'],
        ['18:00', '21:00'],
        ['21:00', '06:00'],
      ],
    ],
  ];
})(globalThis);
