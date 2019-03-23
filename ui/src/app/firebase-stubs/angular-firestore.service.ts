import { Injectable } from '@angular/core';

@Injectable()
export class AngularFirestoreStub {
    // https://stackoverflow.com/questions/46994653/mocking-firestore-collection-in-angular-testbed
    // https://stackoverflow.com/questions/48760093/how-to-provide-mock-angularfirestore-module-inside-angular-component-for-default
}

@Injectable()
export class AngularFireAuthStub {
    auth: any = {
        signInWithPopup() {
            return Promise.resolve();
        }
    };
}
