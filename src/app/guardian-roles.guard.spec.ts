import { TestBed } from '@angular/core/testing';

import { GuardianRolesGuard } from './guardian-roles.guard';

describe('GuardianRolesGuard', () => {
  let guard: GuardianRolesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianRolesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
