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

import { CollectionModelEntityModelComment } from '../models/collection-model-entity-model-comment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class CommentSearchControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation executeSearchCommentGet
   */
  static readonly ExecuteSearchCommentGetPath = '/comments/search/findByPost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchCommentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchCommentGet$Response(params?: {
    post?: Post;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CollectionModelEntityModelComment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentSearchControllerService.ExecuteSearchCommentGetPath, 'get');
    if (params) {
      rb.query('post', params.post, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelEntityModelComment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchCommentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchCommentGet(params?: {
    post?: Post;
  },
  context?: HttpContext

): Observable<CollectionModelEntityModelComment> {

    return this.executeSearchCommentGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelComment>) => r.body as CollectionModelEntityModelComment)
    );
  }

}
