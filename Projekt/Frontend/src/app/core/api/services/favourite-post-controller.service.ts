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
export class FavouritePostControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation likePost
   */
  static readonly LikePostPath = '/api/favourite-post/like/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `likePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  likePost$Response(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDto>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostControllerService.LikePostPath, 'post');
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
        return r as StrictHttpResponse<PostDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `likePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  likePost(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<PostDto> {

    return this.likePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDto>) => r.body as PostDto)
    );
  }

  /**
   * Path part for operation unlike
   */
  static readonly UnlikePath = '/api/favourite-post/unlike/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unlike()` instead.
   *
   * This method doesn't expect any request body.
   */
  unlike$Response(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostControllerService.UnlikePath, 'delete');
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
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `unlike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unlike(params: {
    postId: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.unlike$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
