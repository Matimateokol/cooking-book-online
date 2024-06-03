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

import { CommentDto } from '../models/comment-dto';

@Injectable({
  providedIn: 'root',
})
export class CommentControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateComment
   */
  static readonly UpdateCommentPath = '/api/comments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComment$Response(params: {
    body: CommentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommentDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommentControllerService.UpdateCommentPath, 'put');
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
        return r as StrictHttpResponse<CommentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComment(params: {
    body: CommentDto
  },
  context?: HttpContext

): Observable<CommentDto> {

    return this.updateComment$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommentDto>) => r.body as CommentDto)
    );
  }

  /**
   * Path part for operation deleteComment
   */
  static readonly DeleteCommentPath = '/api/comments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CommentControllerService.DeleteCommentPath, 'delete');
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
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment(params: {
    id: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.deleteComment$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation createComment
   */
  static readonly CreateCommentPath = '/api/comments/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment$Response(params: {
    body: CommentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommentDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommentControllerService.CreateCommentPath, 'post');
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
        return r as StrictHttpResponse<CommentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment(params: {
    body: CommentDto
  },
  context?: HttpContext

): Observable<CommentDto> {

    return this.createComment$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommentDto>) => r.body as CommentDto)
    );
  }

  /**
   * Path part for operation getCommentsByPostId
   */
  static readonly GetCommentsByPostIdPath = '/api/comments/post/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByPostId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId$Response(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CommentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentControllerService.GetCommentsByPostIdPath, 'get');
    if (params) {
      rb.path('postId', params.postId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsByPostId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<Array<CommentDto>> {

    return this.getCommentsByPostId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CommentDto>>) => r.body as Array<CommentDto>)
    );
  }

}
