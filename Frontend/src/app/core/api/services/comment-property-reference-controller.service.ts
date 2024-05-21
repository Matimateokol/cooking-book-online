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

import { CollectionModelObject } from '../models/collection-model-object';
import { EntityModelPost } from '../models/entity-model-post';
import { EntityModelUser } from '../models/entity-model-user';

@Injectable({
  providedIn: 'root',
})
export class CommentPropertyReferenceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation followPropertyReferenceCommentGet1
   */
  static readonly FollowPropertyReferenceCommentGet1Path = '/comments/{id}/author';

  /**
   * get-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet1$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGet1Path, 'get');
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
   * get-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet1$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferenceCommentGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * get-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet1$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGet1Path, 'get');
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
   * get-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet1$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferenceCommentGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceCommentPut
   */
  static readonly CreatePropertyReferenceCommentPutPath = '/comments/{id}/author';

  /**
   * update-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPut$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPutPath, 'put');
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
   * update-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPut$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceCommentPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * update-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPut$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPutPath, 'put');
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
   * update-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPut$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceCommentPut$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceCommentDelete
   */
  static readonly DeletePropertyReferenceCommentDeletePath = '/comments/{id}/author';

  /**
   * delete-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceCommentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceCommentDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.DeletePropertyReferenceCommentDeletePath, 'delete');
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
   * delete-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceCommentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceCommentDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceCommentDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceCommentPatch
   */
  static readonly CreatePropertyReferenceCommentPatchPath = '/comments/{id}/author';

  /**
   * patch-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPatch$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPatchPath, 'patch');
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
   * patch-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPatch$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceCommentPatch$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * patch-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPatch$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPatchPath, 'patch');
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
   * patch-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPatch$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceCommentPatch$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation followPropertyReferenceCommentGet
   */
  static readonly FollowPropertyReferenceCommentGetPath = '/comments/{id}/author/{propertyId}';

  /**
   * get-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGetPath, 'get');
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
   * get-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferenceCommentGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdCommentDelete
   */
  static readonly DeletePropertyReferenceIdCommentDeletePath = '/comments/{id}/author/{propertyId}';

  /**
   * delete-user-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdCommentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdCommentDelete$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.DeletePropertyReferenceIdCommentDeletePath, 'delete');
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
   * delete-user-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdCommentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdCommentDelete(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdCommentDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation followPropertyReferenceCommentGet21
   */
  static readonly FollowPropertyReferenceCommentGet21Path = '/comments/{id}/post';

  /**
   * get-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet21$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGet21Path, 'get');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * get-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet21$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.followPropertyReferenceCommentGet21$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * get-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet21$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGet21Path, 'get');
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
   * get-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet21$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferenceCommentGet21$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceCommentPut1
   */
  static readonly CreatePropertyReferenceCommentPut1Path = '/comments/{id}/post';

  /**
   * update-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPut1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPut1Path, 'put');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * update-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPut1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceCommentPut1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * update-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPut1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPut1Path, 'put');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * update-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPut1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceCommentPut1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceCommentDelete1
   */
  static readonly DeletePropertyReferenceCommentDelete1Path = '/comments/{id}/post';

  /**
   * delete-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceCommentDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceCommentDelete1$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.DeletePropertyReferenceCommentDelete1Path, 'delete');
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
   * delete-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceCommentDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceCommentDelete1(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceCommentDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceCommentPatch1
   */
  static readonly CreatePropertyReferenceCommentPatch1Path = '/comments/{id}/post';

  /**
   * patch-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPatch1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPatch1Path, 'patch');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * patch-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceCommentPatch1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceCommentPatch1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * patch-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceCommentPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPatch1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.CreatePropertyReferenceCommentPatch1Path, 'patch');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * patch-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceCommentPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceCommentPatch1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceCommentPatch1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation followPropertyReferenceCommentGet2
   */
  static readonly FollowPropertyReferenceCommentGet2Path = '/comments/{id}/post/{propertyId}';

  /**
   * get-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceCommentGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet2$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.FollowPropertyReferenceCommentGet2Path, 'get');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * get-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceCommentGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceCommentGet2(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.followPropertyReferenceCommentGet2$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdCommentDelete1
   */
  static readonly DeletePropertyReferenceIdCommentDelete1Path = '/comments/{id}/post/{propertyId}';

  /**
   * delete-post-by-comment-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdCommentDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdCommentDelete1$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentPropertyReferenceControllerService.DeletePropertyReferenceIdCommentDelete1Path, 'delete');
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
   * delete-post-by-comment-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdCommentDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdCommentDelete1(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdCommentDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
