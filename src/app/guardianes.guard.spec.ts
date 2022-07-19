import { TestBed } from '@angular/core/testing';

import { GuardianesGuard } from './guardianes.guard';

describe('GuardianesGuard', () => {
  let guard: GuardianesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
