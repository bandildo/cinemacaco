import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CoreModule } from '../../core.module';

describe('Auth Service', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
  });

  beforeEach(inject(
    [AuthService],
    (injectedAuthService) => {
      service = injectedAuthService;
    }
  ));

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });
});
