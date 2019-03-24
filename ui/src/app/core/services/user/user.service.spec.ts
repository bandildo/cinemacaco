import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { UserService } from './user.service';
import UserUtils from 'src/app/utils/user.utils';
import { UserFirestore } from '../../models/user-firestore.model';
import UrlUtils from 'src/app/utils/url.utils';

describe('User Service', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule, FirebaseStubsModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController, UserService],
    (httpTestingController, injectedUserService) => {
      httpMock = httpTestingController;
      service = injectedUserService;
    }
  ));

  describe('POST', () => {
    it('Should create new user', () => {
      const expectedUser = UserUtils.getTestUser();
      const expectedUserResponse = UserUtils.toUserFirestore(expectedUser);

      service.createUser(expectedUser).subscribe(
        (response: UserFirestore) => {
          expect(response).toEqual(expectedUserResponse);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl(`/users?documentId=${expectedUser.uid}`)
      );
      expect(call.request.method).toEqual('POST');

      call.flush(expectedUserResponse);
    });
  });

  describe('GET', () => {
    it('should get logged in user', () => {
      const expectedUser = UserUtils.getTestUser();
      const expectedUserResponse = UserUtils.toUserFirestore(expectedUser);

      service.getUser(expectedUser.uid).subscribe((response) => {
        expect(response).toEqual(expectedUserResponse);
      });

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl(`/users/${expectedUser.uid}`)
      );
      expect(call.request.method).toEqual('GET');

      call.flush(expectedUserResponse);
    });
  });
});
