import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import Amplify, { Auth } from 'aws-amplify';
import OAuth from '@aws-amplify/auth/lib/OAuth/OAuth';
import { AwsCognitoOAuthOpts, OAuthOpts } from '@aws-amplify/auth/lib/types';
import { CognitoUserSession } from 'amazon-cognito-identity-js';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;
  public config: OAuthOpts;

  constructor(
    private router: Router
  ) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** サインアップ */
  public signUp(email: string, password: string): Observable<any> {
    return fromPromise(Auth.signUp(email, password, email));
  }

  /** 検証 */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** ログイン */
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** ログイン状態の取得 */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** ログアウト */
  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }

  federeatedSignin() {
    Auth.federatedSignIn();
  }

  currentSession(): Promise<CognitoUserSession> {
    return Auth.currentSession();
  }
}
