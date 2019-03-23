import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreStub, AngularFireAuthStub } from './angular-firestore.service';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: AngularFirestore, useClass: AngularFirestoreStub },
    { provide: AngularFireAuth, useClass: AngularFireAuthStub }
  ]
})
export class FirebaseStubsModule {}
