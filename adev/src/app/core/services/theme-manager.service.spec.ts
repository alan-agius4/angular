import type {MockedObject} from 'vitest';
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {TestBed} from '@angular/core/testing';

import {ThemeManager} from './theme-manager.service';
import {LOCAL_STORAGE} from '@angular/docs';

describe('ThemeManager', () => {
  let service: ThemeManager;
  let localStorageSpy: MockedObject<Storage>;

  beforeEach(() => {
    localStorageSpy = {
      getItem: vi.fn(),
      setItem: vi.fn(),
    };
    localStorageSpy.getItem.mockReturnValue(null);
    localStorageSpy.setItem.mockReturnValue();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: LOCAL_STORAGE,
          useValue: localStorageSpy,
        },
      ],
    });
  });

  it('should set theme based on device preferences (auto) when user did not set theme manually', () => {
    localStorageSpy.getItem.mockReturnValue(null);

    service = TestBed.inject(ThemeManager);

    expect(service.theme()).toBe('auto');
  });

  it('should set theme based on stored user preferences (dark) when user already set theme manually', () => {
    localStorageSpy.getItem.mockReturnValue('dark');

    service = TestBed.inject(ThemeManager);

    expect(service.theme()).toBe('dark');
  });

  it('should set theme based on stored user preferences (light) when user already set theme manually', () => {
    localStorageSpy.getItem.mockReturnValue('light');

    service = TestBed.inject(ThemeManager);

    expect(service.theme()).toBe('light');
  });

  it('should set theme based on stored user preferences (auto) when user already set theme manually', () => {
    localStorageSpy.getItem.mockReturnValue('auto');

    service = TestBed.inject(ThemeManager);

    expect(service.theme()).toBe('auto');
  });
});
