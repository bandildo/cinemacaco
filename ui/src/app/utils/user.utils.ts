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
        },
        macaco: {
          booleanValue: user.macaco
        }
      }
    };
  }

  static toUser(user: UserFirestore): User {
    return {
      uid: user.fields.uid.stringValue,
      email: user.fields.email.stringValue,
      admin: user.fields.admin.booleanValue,
      macaco: user.fields.macaco.booleanValue
    };
  }

  static getTestUser(): User {
    return {
      uid: 'user-uid',
      email: 'test@email.com',
      admin: false,
      macaco: false
    } as User;
  }

  static getTestLoginCredential(): firebase.auth.UserCredential {
    const testUser = this.getTestUser();

    return {
      user: {
        uid: testUser.uid,
        email: testUser.email
      }
    } as firebase.auth.UserCredential;
  }
}
