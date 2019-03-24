import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import UrlUtils from 'src/app/utils/url.utils';
import UserUtils from 'src/app/utils/user.utils';
import { UserFirestore } from '../../models/user-firestore.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<UserFirestore> {
    return this.http.post(
      UrlUtils.generateDbUrl(`/users?documentId=${user.uid}`),
      UserUtils.toUserFirestore(user)
    ) as Observable<UserFirestore>;
  }

  getUser(uid: string): Observable<UserFirestore> {
    return this.http.get(
      UrlUtils.generateDbUrl(`/users/${uid}`)
    ) as Observable<UserFirestore>;
  }
}
