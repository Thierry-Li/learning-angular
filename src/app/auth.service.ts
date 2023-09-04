import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor() { }
  isLoggedIn = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
  // Une méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    const isLoggedIn = name === 'pikachu' && password === 'pikachu';

    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isLoggedIn = isLoggedIn))
    );
  }

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }
}
