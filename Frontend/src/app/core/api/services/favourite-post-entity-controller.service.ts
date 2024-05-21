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

import { EntityModelFavouritePost } from '../models/entity-model-favourite-post';
import { FavouritePostRequestBody } from '../models/favourite-post-request-body';
import { PagedModelEntityModelFavouritePost } from '../models/paged-model-entity-model-favourite-post';

@Injectable({
  providedIn: 'root',
})
export class FavouritePostEntityControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceFavouritepostGet1
   */
  static readonly GetCollectionResourceFavouritepostGet1Path = '/favouritePosts';

  /**
   * get-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFavouritepostGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritepostGet1$Json$Response(params?: {

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

): Observable<StrictHttpResponse<PagedModelEntityModelFavouritePost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.GetCollectionResourceFavouritepostGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelFavouritePost>;
      })
    );
  }

  /**
   * get-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFavouritepostGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritepostGet1$Json(params?: {

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

): Observable<PagedModelEntityModelFavouritePost> {

    return this.getCollectionResourceFavouritepostGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFavouritePost>) => r.body as PagedModelEntityModelFavouritePost)
    );
  }

  /**
   * get-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFavouritepostGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritepostGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.GetCollectionResourceFavouritepostGet1Path, 'get');
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
   * get-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFavouritepostGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFavouritepostGet1$UriList(params?: {

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

    return this.getCollectionResourceFavouritepostGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceFavouritepostPost
   */
  static readonly PostCollectionResourceFavouritepostPostPath = '/favouritePosts';

  /**
   * create-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceFavouritepostPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFavouritepostPost$Response(params: {
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelFavouritePost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.PostCollectionResourceFavouritepostPostPath, 'post');
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
        return r as StrictHttpResponse<EntityModelFavouritePost>;
      })
    );
  }

  /**
   * create-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceFavouritepostPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFavouritepostPost(params: {
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelFavouritePost> {

    return this.postCollectionResourceFavouritepostPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritePost>) => r.body as EntityModelFavouritePost)
    );
  }

  /**
   * Path part for operation getItemResourceFavouritepostGet
   */
  static readonly GetItemResourceFavouritepostGetPath = '/favouritePosts/{id}';

  /**
   * get-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceFavouritepostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFavouritepostGet$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelFavouritePost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.GetItemResourceFavouritepostGetPath, 'get');
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
        return r as StrictHttpResponse<EntityModelFavouritePost>;
      })
    );
  }

  /**
   * get-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceFavouritepostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFavouritepostGet(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelFavouritePost> {

    return this.getItemResourceFavouritepostGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritePost>) => r.body as EntityModelFavouritePost)
    );
  }

  /**
   * Path part for operation putItemResourceFavouritepostPut
   */
  static readonly PutItemResourceFavouritepostPutPath = '/favouritePosts/{id}';

  /**
   * update-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceFavouritepostPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFavouritepostPut$Response(params: {
    id: string;
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelFavouritePost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.PutItemResourceFavouritepostPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelFavouritePost>;
      })
    );
  }

  /**
   * update-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceFavouritepostPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFavouritepostPut(params: {
    id: string;
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelFavouritePost> {

    return this.putItemResourceFavouritepostPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritePost>) => r.body as EntityModelFavouritePost)
    );
  }

  /**
   * Path part for operation deleteItemResourceFavouritepostDelete
   */
  static readonly DeleteItemResourceFavouritepostDeletePath = '/favouritePosts/{id}';

  /**
   * delete-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceFavouritepostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFavouritepostDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.DeleteItemResourceFavouritepostDeletePath, 'delete');
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
   * delete-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceFavouritepostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFavouritepostDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteItemResourceFavouritepostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceFavouritepostPatch
   */
  static readonly PatchItemResourceFavouritepostPatchPath = '/favouritePosts/{id}';

  /**
   * patch-favouritepost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceFavouritepostPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFavouritepostPatch$Response(params: {
    id: string;
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelFavouritePost>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostEntityControllerService.PatchItemResourceFavouritepostPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelFavouritePost>;
      })
    );
  }

  /**
   * patch-favouritepost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceFavouritepostPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFavouritepostPatch(params: {
    id: string;
    body: FavouritePostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelFavouritePost> {

    return this.patchItemResourceFavouritepostPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelFavouritePost>) => r.body as EntityModelFavouritePost)
    );
  }

}
