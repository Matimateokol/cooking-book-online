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

import { EntityModelUser } from '../models/entity-model-user';

@Injectable({
  providedIn: 'root',
})
export class UserSearchControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation executeSearchUserGet
   */
  static readonly ExecuteSearchUserGetPath = '/users/search/findByEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet$Response(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserSearchControllerService.ExecuteSearchUserGetPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelUser>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.executeSearchUserGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

}
