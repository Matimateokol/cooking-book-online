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

import { CommentRequestBody } from '../models/comment-request-body';
import { EntityModelComment } from '../models/entity-model-comment';
import { PagedModelEntityModelComment } from '../models/paged-model-entity-model-comment';

@Injectable({
  providedIn: 'root',
})
export class CommentEntityControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceCommentGet1
   */
  static readonly GetCollectionResourceCommentGet1Path = '/comments';

  /**
   * get-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceCommentGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCommentGet1$Json$Response(params?: {

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

): Observable<StrictHttpResponse<PagedModelEntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.GetCollectionResourceCommentGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelComment>;
      })
    );
  }

  /**
   * get-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceCommentGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCommentGet1$Json(params?: {

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

): Observable<PagedModelEntityModelComment> {

    return this.getCollectionResourceCommentGet1$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelComment>) => r.body as PagedModelEntityModelComment)
    );
  }

  /**
   * get-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceCommentGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCommentGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.GetCollectionResourceCommentGet1Path, 'get');
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
   * get-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceCommentGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCommentGet1$UriList(params?: {

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

    return this.getCollectionResourceCommentGet1$UriList$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceCommentPost
   */
  static readonly PostCollectionResourceCommentPostPath = '/comments';

  /**
   * create-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceCommentPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceCommentPost$Response(params: {
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.PostCollectionResourceCommentPostPath, 'post');
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
        return r as StrictHttpResponse<EntityModelComment>;
      })
    );
  }

  /**
   * create-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceCommentPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceCommentPost(params: {
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<EntityModelComment> {

    return this.postCollectionResourceCommentPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelComment>) => r.body as EntityModelComment)
    );
  }

  /**
   * Path part for operation getItemResourceCommentGet
   */
  static readonly GetItemResourceCommentGetPath = '/comments/{id}';

  /**
   * get-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceCommentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceCommentGet$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.GetItemResourceCommentGetPath, 'get');
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
        return r as StrictHttpResponse<EntityModelComment>;
      })
    );
  }

  /**
   * get-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceCommentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceCommentGet(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EntityModelComment> {

    return this.getItemResourceCommentGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelComment>) => r.body as EntityModelComment)
    );
  }

  /**
   * Path part for operation putItemResourceCommentPut
   */
  static readonly PutItemResourceCommentPutPath = '/comments/{id}';

  /**
   * update-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceCommentPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceCommentPut$Response(params: {
    id: string;
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.PutItemResourceCommentPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelComment>;
      })
    );
  }

  /**
   * update-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceCommentPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceCommentPut(params: {
    id: string;
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<EntityModelComment> {

    return this.putItemResourceCommentPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelComment>) => r.body as EntityModelComment)
    );
  }

  /**
   * Path part for operation deleteItemResourceCommentDelete
   */
  static readonly DeleteItemResourceCommentDeletePath = '/comments/{id}';

  /**
   * delete-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceCommentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceCommentDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.DeleteItemResourceCommentDeletePath, 'delete');
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
   * delete-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceCommentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceCommentDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteItemResourceCommentDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceCommentPatch
   */
  static readonly PatchItemResourceCommentPatchPath = '/comments/{id}';

  /**
   * patch-comment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceCommentPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceCommentPatch$Response(params: {
    id: string;
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentEntityControllerService.PatchItemResourceCommentPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelComment>;
      })
    );
  }

  /**
   * patch-comment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceCommentPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceCommentPatch(params: {
    id: string;
    body: CommentRequestBody
  },
  context?: HttpContext

): Observable<EntityModelComment> {

    return this.patchItemResourceCommentPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntityModelComment>) => r.body as EntityModelComment)
    );
  }

}
