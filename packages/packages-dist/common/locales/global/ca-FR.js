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
  global.ng.common.locales['ca-fr'] = [
    'ca-FR',
    [['a. m.', 'p. m.'], u, u],
    u,
    [
      ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
      ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
      ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
      ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
    ],
    u,
    [
      ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
      [
        'de gen.',
        'de febr.',
        'de març',
        'd’abr.',
        'de maig',
        'de juny',
        'de jul.',
        'd’ag.',
        'de set.',
        'd’oct.',
        'de nov.',
        'de des.',
      ],
      [
        'de gener',
        'de febrer',
        'de març',
        'd’abril',
        'de maig',
        'de juny',
        'de juliol',
        'd’agost',
        'de setembre',
        'd’octubre',
        'de novembre',
        'de desembre',
      ],
    ],
    [
      ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
      [
        'gen.',
        'febr.',
        'març',
        'abr.',
        'maig',
        'juny',
        'jul.',
        'ag.',
        'set.',
        'oct.',
        'nov.',
        'des.',
      ],
      [
        'gener',
        'febrer',
        'març',
        'abril',
        'maig',
        'juny',
        'juliol',
        'agost',
        'setembre',
        'octubre',
        'novembre',
        'desembre',
      ],
    ],
    [['aC', 'dC'], u, ['abans de Crist', 'després de Crist']],
    1,
    [6, 0],
    ['d/M/yy', 'd MMM y', "d MMMM 'de' y", "EEEE, d MMMM 'de' y"],
    ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss (zzzz)'],
    ['{1} {0}', '{1}, {0}', "{1}, 'a' 'les' {0}", u],
    [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
    'EUR',
    '€',
    'euro',
    {
      'AUD': ['AU$', '$'],
      'BRL': [u, 'R$'],
      'BYN': [u, 'р.'],
      'CAD': [u, '$'],
      'CNY': [u, '¥'],
      'ESP': ['₧'],
      'FRF': ['F'],
      'MXN': [u, '$'],
      'PHP': [u, '₱'],
      'THB': ['฿'],
      'USD': [u, '$'],
      'VEF': [u, 'Bs F'],
      'XCD': [u, '$'],
      'XXX': [],
    },
    'ltr',
    plural,
    [
      [
        ['mitjanit', 'mat.', 'matí', 'md', 'tarda', 'vespre', 'nit'],
        ['mitjanit', 'matinada', 'matí', 'migdia', 'tarda', 'vespre', 'nit'],
        u,
      ],
      [['mitjanit', 'matinada', 'matí', 'migdia', 'tarda', 'vespre', 'nit'], u, u],
      [
        '00:00',
        ['00:00', '06:00'],
        ['06:00', '12:00'],
        ['12:00', '13:00'],
        ['13:00', '19:00'],
        ['19:00', '21:00'],
        ['21:00', '24:00'],
      ],
    ],
  ];
})(globalThis);
