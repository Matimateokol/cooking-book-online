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
import { PagedModelEntityModelUser } from '../models/paged-model-entity-model-user';
import { UserRequestBody } from '../models/user-request-body';

@Injectable({
  providedIn: 'root',
})
export class UserEntityControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceUserGet1
   */
  static readonly GetCollectionResourceUserGet1Path = '/users';

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUserGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$Json$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PagedModelEntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.GetCollectionResourceUserGet1Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/x-spring-data-compact+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagedModelEntityModelUser>;
      })
    );
  }

  /**
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUserGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$Json(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  },
  context?: HttpContext

): Observable<PagedModelEntityModelUser> {

    return this.getCollectionResourceUserGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelUser>) => r.body as PagedModelEntityModelUser)
    );
  }

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUserGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$UriList$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.GetCollectionResourceUserGet1Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/uri-list',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUserGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$UriList(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  },
  context?: HttpContext

): Observable<string> {

    return this.getCollectionResourceUserGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceUserPost
   */
  static readonly PostCollectionResourceUserPostPath = '/users';

  /**
   * create-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceUserPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUserPost$Response(params: {
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.PostCollectionResourceUserPostPath, 'post');
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
        return r as StrictHttpResponse<EntityModelUser>;
      })
    );
  }

  /**
   * create-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceUserPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUserPost(params: {
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.postCollectionResourceUserPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation getItemResourceUserGet
   */
  static readonly GetItemResourceUserGetPath = '/users/{id}';

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUserGet$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.GetItemResourceUserGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUserGet(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.getItemResourceUserGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation putItemResourceUserPut
   */
  static readonly PutItemResourceUserPutPath = '/users/{id}';

  /**
   * update-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceUserPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUserPut$Response(params: {
    id: string;
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.PutItemResourceUserPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * update-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceUserPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUserPut(params: {
    id: string;
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.putItemResourceUserPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deleteItemResourceUserDelete
   */
  static readonly DeleteItemResourceUserDeletePath = '/users/{id}';

  /**
   * delete-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUserDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.DeleteItemResourceUserDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * delete-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUserDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteItemResourceUserDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceUserPatch
   */
  static readonly PatchItemResourceUserPatchPath = '/users/{id}';

  /**
   * patch-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceUserPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUserPatch$Response(params: {
    id: string;
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserEntityControllerService.PatchItemResourceUserPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * patch-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceUserPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUserPatch(params: {
    id: string;
    body: UserRequestBody
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.patchItemResourceUserPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

}
