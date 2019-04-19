import { User } from '../core/models/user.model';

export default class UserUtils {
  static getTestUser(): User {
    return {
      id: 'user-id',
      email: 'test@email.com',
      admin: false,
      macaco: false
    } as User;
  }

  static getTestLoginCredential(): firebase.auth.UserCredential {
    const testUser = this.getTestUser();

    return {
      user: {
        uid: testUser.id,
        email: testUser.email
      }
    } as firebase.auth.UserCredential;
  }
}
