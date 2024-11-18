import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ingresoGuard } from './ingreso.guard';

describe('ingresoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ingresoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
