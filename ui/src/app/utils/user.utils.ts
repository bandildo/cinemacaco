import { User } from '../core/models/user.model';
import { UserFirestore } from '../core/models/user-firestore.model';

export default class UserUtils {
  static toUserFirestore(user: User): UserFirestore {
    return {
      fields: {
        uid: {
          stringValue: user.uid
        },
        email: {
          stringValue: user.email
        },
        admin: {
          booleanValue: user.admin
        }
      }
    };
  }

  static getTestUser(): User {
    return {
      uid: 'user-uid',
      email: 'test@email.com',
      admin: false
    } as User;
  }
}
