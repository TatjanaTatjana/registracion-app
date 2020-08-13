import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor( public afAuth: AngularFireAuth , public router: Router) {}
  login(email: string, password: string){

    this.afAuth.signInWithEmailAndPassword(email, password ).then(
      value => {
        console.log('dobaro posao');
       this.router.navigate(['dashboard']);
      }
    ).catch( err => {
      console.log('Nesto nije uredu', err.message);
      this.router.navigate(['sign-up']);
      }
    );
    }



  signup(email: string, password: string){

  this.afAuth.createUserWithEmailAndPassword( email, password ).then(
    value => {
      console.log('Succes', value);
     this.router.navigate(['dashboard']);
    }
  ).catch( err => {
    console.log('Nesto nije uredu', err.message);
    }
  );
  }
   logout(){
     this.afAuth.signOut();
     this.router.navigate (['sign-in']);
   }
}
