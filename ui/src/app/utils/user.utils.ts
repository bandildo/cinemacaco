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

  static toUser(user: UserFirestore): User {
    return {
      uid: user.fields.uid.stringValue,
      email: user.fields.email.stringValue,
      admin: user.fields.admin.booleanValue
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
