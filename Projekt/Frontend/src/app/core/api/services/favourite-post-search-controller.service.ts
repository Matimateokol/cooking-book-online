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


@Injectable({
  providedIn: 'root',
})
export class FavouritePostSearchControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation executeSearchFavouritepostGet
   */
  static readonly ExecuteSearchFavouritepostGetPath = '/favouritePosts/search/deleteByPostIdAndUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritepostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet$Response(params?: {
    postId?: number;
    userId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostSearchControllerService.ExecuteSearchFavouritepostGetPath, 'get');
    if (params) {
      rb.query('postId', params.postId, {});
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritepostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet(params?: {
    postId?: number;
    userId?: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.executeSearchFavouritepostGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation executeSearchFavouritepostGet1
   */
  static readonly ExecuteSearchFavouritepostGet1Path = '/favouritePosts/search/getCountByPostId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritepostGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet1$Response(params?: {
    postId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostSearchControllerService.ExecuteSearchFavouritepostGet1Path, 'get');
    if (params) {
      rb.query('postId', params.postId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritepostGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet1(params?: {
    postId?: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.executeSearchFavouritepostGet1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation executeSearchFavouritepostGet2
   */
  static readonly ExecuteSearchFavouritepostGet2Path = '/favouritePosts/search/getIfPostWasLikedByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFavouritepostGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet2$Response(params?: {
    userId?: number;
    postId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouritePostSearchControllerService.ExecuteSearchFavouritepostGet2Path, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('postId', params.postId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFavouritepostGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFavouritepostGet2(params?: {
    userId?: number;
    postId?: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.executeSearchFavouritepostGet2$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
