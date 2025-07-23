import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import {
  BehaviorSubject,
  catchError,
  filter,
  from,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import { FirebaseError } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { AuthCredentials, ResutlLogin, User } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _auth = inject(Auth);
  private readonly _router = inject(Router);
  private readonly currentUser = new BehaviorSubject<any>(null);
  private readonly authReady = new BehaviorSubject(false);

  private get isClient(): boolean {
    return typeof window !== 'undefined';
  }

  constructor() {
    if (this.isClient) {
      onAuthStateChanged(this._auth, async (user) => {
        this.currentUser.next(user);
        this.authReady.next(true);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.removeItem('user');
        }
      });
    }
  }

  public session(): Observable<any> {
    if (this.isClient) {
      const user = localStorage.getItem('user');
      return of(user ? JSON.parse(user) : null);
    }
    return of(null);
  }

  public async signOut() {
    try {
      await signOut(this._auth);
      localStorage.removeItem('user');
      this.currentUser.next(null);
      await this._router.navigate(['/auth/log-in']);
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }

  public getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable();
  }

  public signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this._auth, provider)).pipe(
      switchMap((result) => {
        const user = result.user; 
        this.currentUser.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return of(user);
      }),
      catchError((error) => {
        console.error('Error al iniciar sesión con Google:', error);
        return of(null);
      })
    );
  }
}
