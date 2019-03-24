import { VoteFirestore } from '../../../game/models/vote-firestore.model';
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

  updateUser(user: User) {
    return this.http.patch(
      UrlUtils.generateDbUrl(`/users/${user.uid}`),
      UserUtils.toUserFirestore(user)
    ) as Observable<UserFirestore>;
  }
}
