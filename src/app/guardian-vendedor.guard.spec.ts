import { TestBed } from '@angular/core/testing';

import { GuardianVendedorGuard } from './guardian-compartido.guard';

describe('GuardianVendedorGuard', () => {
  let guard: GuardianVendedorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianVendedorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
