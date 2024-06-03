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
export class FavouritePostPropertyReferenceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation followPropertyReferenceFavouritepostGet1
   */
  static readonly FollowPropertyReferenceFavouritepostGet1Path = '/favouritePosts/{id}/post';

  /**
   * get-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet1$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGet1Path, 'get');
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
   * get-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet1$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.followPropertyReferenceFavouritepostGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * get-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet1$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGet1Path, 'get');
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
   * get-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet1$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferenceFavouritepostGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceFavouritepostPut
   */
  static readonly CreatePropertyReferenceFavouritepostPutPath = '/favouritePosts/{id}/post';

  /**
   * update-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPut$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPutPath, 'put');
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
   * update-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPut$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceFavouritepostPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * update-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPut$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPutPath, 'put');
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
   * update-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPut$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceFavouritepostPut$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceFavouritepostDelete
   */
  static readonly DeletePropertyReferenceFavouritepostDeletePath = '/favouritePosts/{id}/post';

  /**
   * delete-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceFavouritepostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritepostDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.DeletePropertyReferenceFavouritepostDeletePath, 'delete');
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
   * delete-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceFavouritepostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritepostDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceFavouritepostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceFavouritepostPatch
   */
  static readonly CreatePropertyReferenceFavouritepostPatchPath = '/favouritePosts/{id}/post';

  /**
   * patch-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPatch$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPatchPath, 'patch');
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
   * patch-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPatch$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceFavouritepostPatch$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * patch-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPatch$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPatchPath, 'patch');
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
   * patch-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPatch$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.createPropertyReferenceFavouritepostPatch$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation followPropertyReferenceFavouritepostGet
   */
  static readonly FollowPropertyReferenceFavouritepostGetPath = '/favouritePosts/{id}/post/{propertyId}';

  /**
   * get-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGetPath, 'get');
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
   * get-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.followPropertyReferenceFavouritepostGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdFavouritepostDelete
   */
  static readonly DeletePropertyReferenceIdFavouritepostDeletePath = '/favouritePosts/{id}/post/{propertyId}';

  /**
   * delete-post-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdFavouritepostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritepostDelete$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.DeletePropertyReferenceIdFavouritepostDeletePath, 'delete');
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
   * delete-post-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdFavouritepostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritepostDelete(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdFavouritepostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation followPropertyReferenceFavouritepostGet21
   */
  static readonly FollowPropertyReferenceFavouritepostGet21Path = '/favouritePosts/{id}/user';

  /**
   * get-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet21$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGet21Path, 'get');
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
   * get-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet21$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferenceFavouritepostGet21$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * get-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet21$UriList$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGet21Path, 'get');
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
   * get-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet21$UriList(params: {
    id: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.followPropertyReferenceFavouritepostGet21$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceFavouritepostPut1
   */
  static readonly CreatePropertyReferenceFavouritepostPut1Path = '/favouritePosts/{id}/user';

  /**
   * update-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPut1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPut1Path, 'put');
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
   * update-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPut1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceFavouritepostPut1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * update-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPut1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPut1Path, 'put');
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
   * update-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPut1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceFavouritepostPut1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceFavouritepostDelete1
   */
  static readonly DeletePropertyReferenceFavouritepostDelete1Path = '/favouritePosts/{id}/user';

  /**
   * delete-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceFavouritepostDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritepostDelete1$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.DeletePropertyReferenceFavouritepostDelete1Path, 'delete');
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
   * delete-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceFavouritepostDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFavouritepostDelete1(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceFavouritepostDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceFavouritepostPatch1
   */
  static readonly CreatePropertyReferenceFavouritepostPatch1Path = '/favouritePosts/{id}/user';

  /**
   * patch-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPatch1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPatch1Path, 'patch');
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
   * patch-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFavouritepostPatch1$Json(params: {
    id: string;
    body: CollectionModelObject
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceFavouritepostPatch1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * patch-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFavouritepostPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPatch1$UriList$Response(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.CreatePropertyReferenceFavouritepostPatch1Path, 'patch');
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
   * patch-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFavouritepostPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFavouritepostPatch1$UriList(params: {
    id: string;
    body: string
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.createPropertyReferenceFavouritepostPatch1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation followPropertyReferenceFavouritepostGet2
   */
  static readonly FollowPropertyReferenceFavouritepostGet2Path = '/favouritePosts/{id}/user/{propertyId}';

  /**
   * get-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFavouritepostGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet2$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelUser>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.FollowPropertyReferenceFavouritepostGet2Path, 'get');
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
   * get-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFavouritepostGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFavouritepostGet2(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<EntityModelUser> {

    return this.followPropertyReferenceFavouritepostGet2$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>) => r.body as EntityModelUser)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdFavouritepostDelete1
   */
  static readonly DeletePropertyReferenceIdFavouritepostDelete1Path = '/favouritePosts/{id}/user/{propertyId}';

  /**
   * delete-user-by-favouritepost-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdFavouritepostDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritepostDelete1$Response(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostPropertyReferenceControllerService.DeletePropertyReferenceIdFavouritepostDelete1Path, 'delete');
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
   * delete-user-by-favouritepost-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdFavouritepostDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFavouritepostDelete1(params: {
    id: string;
    propertyId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePropertyReferenceIdFavouritepostDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
