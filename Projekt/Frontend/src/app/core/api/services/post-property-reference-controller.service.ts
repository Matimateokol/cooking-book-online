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

import { CollectionModelComment } from '../models/collection-model-comment';
import { CollectionModelObject } from '../models/collection-model-object';
import { EntityModelUser } from '../models/entity-model-user';

@Injectable({
  providedIn: 'root',
})
export class PostPropertyReferenceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation followPropertyReferencePostGet1
   */
  static readonly FollowPropertyReferencePostGet1Path = '/posts/{id}/author';

  /**
   * get-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet1$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGet1Path, 'get');
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
   * get-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet1$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferencePostGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * get-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet1$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGet1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * get-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet1$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferencePostGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferencePostPut
   */
  static readonly CreatePropertyReferencePostPutPath = '/posts/{id}/author';

  /**
   * update-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPut$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * update-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPut$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferencePostPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * update-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPut$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * update-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPut$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferencePostPut$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferencePostDelete
   */
  static readonly DeletePropertyReferencePostDeletePath = '/posts/{id}/author';

  /**
   * delete-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferencePostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferencePostDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.DeletePropertyReferencePostDeletePath, 'delete');
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
   * delete-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferencePostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferencePostDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferencePostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferencePostPatch
   */
  static readonly CreatePropertyReferencePostPatchPath = '/posts/{id}/author';

  /**
   * patch-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPatch$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * patch-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPatch$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferencePostPatch$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * patch-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPatch$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * patch-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPatch$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferencePostPatch$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation followPropertyReferencePostGet
   */
  static readonly FollowPropertyReferencePostGetPath = '/posts/{id}/author/{propertyId}';

  /**
   * get-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * get-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferencePostGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdPostDelete
   */
  static readonly DeletePropertyReferenceIdPostDeletePath = '/posts/{id}/author/{propertyId}';

  /**
   * delete-user-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdPostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdPostDelete$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.DeletePropertyReferenceIdPostDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * delete-user-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdPostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdPostDelete(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdPostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation followPropertyReferencePostGet21
   */
  static readonly FollowPropertyReferencePostGet21Path = '/posts/{id}/comments';

  /**
   * get-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet21$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGet21Path, 'get');
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
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * get-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet21$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.followPropertyReferencePostGet21$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * get-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet21$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGet21Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * get-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet21$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferencePostGet21$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferencePostPut1
   */
  static readonly CreatePropertyReferencePostPut1Path = '/posts/{id}/comments';

  /**
   * update-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPut1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * update-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPut1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.createPropertyReferencePostPut1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * update-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPut1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * update-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPut1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.createPropertyReferencePostPut1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * Path part for operation deletePropertyReferencePostDelete1
   */
  static readonly DeletePropertyReferencePostDelete1Path = '/posts/{id}/comments';

  /**
   * delete-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferencePostDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferencePostDelete1$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.DeletePropertyReferencePostDelete1Path, 'delete');
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
   * delete-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferencePostDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferencePostDelete1(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferencePostDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferencePostPatch1
   */
  static readonly CreatePropertyReferencePostPatch1Path = '/posts/{id}/comments';

  /**
   * patch-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPatch1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPatch1Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * patch-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferencePostPatch1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.createPropertyReferencePostPatch1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * patch-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferencePostPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPatch1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.CreatePropertyReferencePostPatch1Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * patch-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferencePostPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferencePostPatch1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.createPropertyReferencePostPatch1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * Path part for operation followPropertyReferencePostGet2
   */
  static readonly FollowPropertyReferencePostGet2Path = '/posts/{id}/comments/{propertyId}';

  /**
   * get-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferencePostGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet2$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.FollowPropertyReferencePostGet2Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelComment>;
      })
    );
  }

  /**
   * get-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferencePostGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferencePostGet2(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<CollectionModelComment> {

    return this.followPropertyReferencePostGet2$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelComment>) => r.body as CollectionModelComment)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdPostDelete1
   */
  static readonly DeletePropertyReferenceIdPostDelete1Path = '/posts/{id}/comments/{propertyId}';

  /**
   * delete-comment-by-post-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdPostDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdPostDelete1$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostPropertyReferenceControllerService.DeletePropertyReferenceIdPostDelete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * delete-comment-by-post-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdPostDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdPostDelete1(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdPostDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
