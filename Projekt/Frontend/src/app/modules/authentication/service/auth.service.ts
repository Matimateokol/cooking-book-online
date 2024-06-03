import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, tap } from "rxjs";
import { UserDto } from "src/app/core/api/models/user-dto";
import jwt_decode from 'jwt-decode';

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new ReplaySubject<UserDto | undefined>(1);
  public readonly user$ = this.userSubject.asObservable();
  private readonly apiUrl = 'http://localhost:8080/api/v1/auth';
  private readonly api = 'http://localhost:8080/api';

  public constructor(private httpClient: HttpClient) {
   this.getUserIfTokenExists();
  }

  public login(email: string, password: string) {
    return this.httpClient.post<any>(`${this.apiUrl}/authenticate`, {email, password}).pipe(
      tap({
        next: async response => {
          localStorage.setItem('token', response.token)
          this.getUserIfTokenExists();
        }
      })
    );
  }

  public register(firstName: string, lastName: string, email: string, password: string) {
    return this.httpClient.post(`${ this.apiUrl }/register`, { firstName, lastName, email, password });
  }

  public logout() {
    localStorage.removeItem('token');
    this.userSubject.next(undefined);
  }

  public isLoggedIn() {
    return !!this.getToken();
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  private fetchCurrentUser(email: string): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this.api}/users/${email}`);
  }

  private getUserIfTokenExists() {
    const token = localStorage.getItem("token");
    if (token) {
      const email = jwt_decode<JwtPayload>(token).sub;
      this.fetchCurrentUser(email).subscribe(user => {
        this.userSubject.next(user);
      });
    }
  }
}
