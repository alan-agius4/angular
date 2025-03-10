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
    return 5;
  }
  global.ng.common.locales['de-at'] = [
    'de-AT',
    [['AM', 'PM'], u, u],
    [['vm.', 'nm.'], ['AM', 'PM'], u],
    [
      ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
      ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
      ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
    ],
    [
      ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
      ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
    ],
    [
      ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      [
        'Jän.',
        'Feb.',
        'März',
        'Apr.',
        'Mai',
        'Juni',
        'Juli',
        'Aug.',
        'Sep.',
        'Okt.',
        'Nov.',
        'Dez.',
      ],
      [
        'Jänner',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ],
    ],
    [
      ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      [
        'Jänner',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ],
    ],
    [['v. Chr.', 'n. Chr.'], u, u],
    1,
    [6, 0],
    ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    ['{1}, {0}', u, "{1} 'um' {0}", u],
    [',', ' ', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':', u, '.'],
    ['#,##0.###', '#,##0 %', '¤ #,##0.00', '#E0'],
    'EUR',
    '€',
    'Euro',
    {
      'ATS': ['öS'],
      'AUD': ['AU$', '$'],
      'BGM': ['BGK'],
      'BGO': ['BGJ'],
      'BYN': [u, 'р.'],
      'CUC': [u, 'Cub$'],
      'DEM': ['DM'],
      'FKP': [u, 'Fl£'],
      'GHS': [u, '₵'],
      'GNF': [u, 'F.G.'],
      'KMF': [u, 'FC'],
      'PHP': [u, '₱'],
      'RON': [u, 'L'],
      'RUR': [u, 'р.'],
      'RWF': [u, 'F.Rw'],
      'SYP': [],
      'THB': ['฿'],
      'TWD': ['NT$'],
      'XXX': [],
      'ZMW': [u, 'K'],
    },
    'ltr',
    plural,
    [
      [
        ['Mitternacht', 'morgens', 'vorm.', 'mittags', 'nachm.', 'abends', 'nachts'],
        u,
        ['Mitternacht', 'morgens', 'vormittags', 'mittags', 'nachmittags', 'abends', 'nachts'],
      ],
      [
        ['Mitternacht', 'Morgen', 'Vorm.', 'Mittag', 'Nachm.', 'Abend', 'Nacht'],
        u,
        ['Mitternacht', 'Morgen', 'Vormittag', 'Mittag', 'Nachmittag', 'Abend', 'Nacht'],
      ],
      [
        '00:00',
        ['05:00', '10:00'],
        ['10:00', '12:00'],
        ['12:00', '13:00'],
        ['13:00', '18:00'],
        ['18:00', '24:00'],
        ['00:00', '05:00'],
      ],
    ],
  ];
})(globalThis);
