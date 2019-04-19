import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import UrlUtils from 'src/app/utils/url.utils';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post(UrlUtils.generateDbUrl('/users/new'), user) as Observable<User>;
  }

  getUser(id: string): Observable<User> {
    return this.http.get(UrlUtils.generateDbUrl(`/users/login/${id}`)) as Observable<User>;
  }
}
