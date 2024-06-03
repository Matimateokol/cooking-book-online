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

import { EntityModelPost } from '../models/entity-model-post';
import { PagedModelEntityModelPost } from '../models/paged-model-entity-model-post';
import { PostRequestBody } from '../models/post-request-body';

@Injectable({
  providedIn: 'root',
})
export class PostEntityControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourcePostGet1
   */
  static readonly GetCollectionResourcePostGet1Path = '/posts';

  /**
   * get-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourcePostGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourcePostGet1$Json$Response(params?: {

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

): Observable<StrictHttpResponse<PagedModelEntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.GetCollectionResourcePostGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelPost>;
      })
    );
  }

  /**
   * get-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourcePostGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourcePostGet1$Json(params?: {

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

): Observable<PagedModelEntityModelPost> {

    return this.getCollectionResourcePostGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelPost>) => r.body as PagedModelEntityModelPost)
    );
  }

  /**
   * get-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourcePostGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourcePostGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.GetCollectionResourcePostGet1Path, 'get');
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
   * get-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourcePostGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourcePostGet1$UriList(params?: {

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

    return this.getCollectionResourcePostGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourcePostPost
   */
  static readonly PostCollectionResourcePostPostPath = '/posts';

  /**
   * create-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourcePostPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourcePostPost$Response(params: {
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.PostCollectionResourcePostPostPath, 'post');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * create-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourcePostPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourcePostPost(params: {
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.postCollectionResourcePostPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation getItemResourcePostGet
   */
  static readonly GetItemResourcePostGetPath = '/posts/{id}';

  /**
   * get-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourcePostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourcePostGet$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.GetItemResourcePostGetPath, 'get');
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
   * get-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourcePostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourcePostGet(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.getItemResourcePostGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation putItemResourcePostPut
   */
  static readonly PutItemResourcePostPutPath = '/posts/{id}';

  /**
   * update-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourcePostPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourcePostPut$Response(params: {
    id: string;
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.PutItemResourcePostPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * update-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourcePostPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourcePostPut(params: {
    id: string;
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.putItemResourcePostPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

  /**
   * Path part for operation deleteItemResourcePostDelete
   */
  static readonly DeleteItemResourcePostDeletePath = '/posts/{id}';

  /**
   * delete-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourcePostDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourcePostDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.DeleteItemResourcePostDeletePath, 'delete');
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
   * delete-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourcePostDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourcePostDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteItemResourcePostDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourcePostPatch
   */
  static readonly PatchItemResourcePostPatchPath = '/posts/{id}';

  /**
   * patch-post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourcePostPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourcePostPatch$Response(params: {
    id: string;
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelPost>> {

    const rb = new RequestBuilder(this.rootUrl, PostEntityControllerService.PatchItemResourcePostPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelPost>;
      })
    );
  }

  /**
   * patch-post
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourcePostPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourcePostPatch(params: {
    id: string;
    body: PostRequestBody
  },
  context?: HttpContext

): Observable<EntityModelPost> {

    return this.patchItemResourcePostPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelPost>) => r.body as EntityModelPost)
    );
  }

}
