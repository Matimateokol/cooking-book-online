/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthenticationRequestDto } from '../models/authentication-request-dto';
import { AuthenticationResponseDto } from '../models/authentication-response-dto';
import { RegisterRequestDto } from '../models/register-request-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation register
   */
  static readonly RegisterPath = '/api/v1/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: {
    body: RegisterRequestDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthenticationResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationControllerService.RegisterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: {
    body: RegisterRequestDto
  },
  context?: HttpContext

): Observable<AuthenticationResponseDto> {

    return this.register$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponseDto>) => r.body as AuthenticationResponseDto)
    );
  }

  /**
   * Path part for operation authenticate
   */
  static readonly AuthenticatePath = '/api/v1/auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: {
    body: AuthenticationRequestDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthenticationResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationControllerService.AuthenticatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: {
    body: AuthenticationRequestDto
  },
  context?: HttpContext

): Observable<AuthenticationResponseDto> {

    return this.authenticate$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponseDto>) => r.body as AuthenticationResponseDto)
    );
  }

}
