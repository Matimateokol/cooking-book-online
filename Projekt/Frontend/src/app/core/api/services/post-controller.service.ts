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

import { PostDto } from '../models/post-dto';

@Injectable({
  providedIn: 'root',
})
export class PostControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPostById
   */
  static readonly GetPostByIdPath = '/api/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostControllerService.GetPostByIdPath, 'get');
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
        return r as StrictHttpResponse<PostDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PostDto> {

    return this.getPostById$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDto>) => r.body as PostDto)
    );
  }

  /**
   * Path part for operation updatePost
   */
  static readonly UpdatePostPath = '/api/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost$Response(params: {
    id: number;
    body: PostDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostControllerService.UpdatePostPath, 'put');
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
        return r as StrictHttpResponse<PostDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost(params: {
    id: number;
    body: PostDto
  },
  context?: HttpContext

): Observable<PostDto> {

    return this.updatePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDto>) => r.body as PostDto)
    );
  }

  /**
   * Path part for operation deletePost
   */
  static readonly DeletePostPath = '/api/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, PostControllerService.DeletePostPath, 'delete');
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
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.deletePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation getPosts
   */
  static readonly GetPostsPath = '/api/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: {
    pageNo?: number;
    pageSize?: number;
    sortBy?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PostDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PostControllerService.GetPostsPath, 'get');
    if (params) {
      rb.query('pageNo', params.pageNo, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('sortBy', params.sortBy, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PostDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: {
    pageNo?: number;
    pageSize?: number;
    sortBy?: string;
  },
  context?: HttpContext

): Observable<Array<PostDto>> {

    return this.getPosts$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>) => r.body as Array<PostDto>)
    );
  }

  /**
   * Path part for operation createPost
   */
  static readonly CreatePostPath = '/api/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost$Response(params: {
    body: PostDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostControllerService.CreatePostPath, 'post');
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
        return r as StrictHttpResponse<PostDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost(params: {
    body: PostDto
  },
  context?: HttpContext

): Observable<PostDto> {

    return this.createPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDto>) => r.body as PostDto)
    );
  }

}
