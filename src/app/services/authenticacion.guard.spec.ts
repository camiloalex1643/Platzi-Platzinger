import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticacionGuard } from './authenticacion.guard';

describe('AuthenticacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticacionGuard]
    });
  });

  it('should ...', inject([AuthenticacionGuard], (guard: AuthenticacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
