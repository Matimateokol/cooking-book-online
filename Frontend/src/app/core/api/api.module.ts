/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CommentEntityControllerService } from './services/comment-entity-controller.service';
import { CommentSearchControllerService } from './services/comment-search-controller.service';
import { CommentPropertyReferenceControllerService } from './services/comment-property-reference-controller.service';
import { FavouritePostEntityControllerService } from './services/favourite-post-entity-controller.service';
import { FavouritePostSearchControllerService } from './services/favourite-post-search-controller.service';
import { FavouritePostPropertyReferenceControllerService } from './services/favourite-post-property-reference-controller.service';
import { PostEntityControllerService } from './services/post-entity-controller.service';
import { PostPropertyReferenceControllerService } from './services/post-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { UserEntityControllerService } from './services/user-entity-controller.service';
import { UserSearchControllerService } from './services/user-search-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { PostControllerService } from './services/post-controller.service';
import { CommentControllerService } from './services/comment-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { FavouritePostControllerService } from './services/favourite-post-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CommentEntityControllerService,
    CommentSearchControllerService,
    CommentPropertyReferenceControllerService,
    FavouritePostEntityControllerService,
    FavouritePostSearchControllerService,
    FavouritePostPropertyReferenceControllerService,
    PostEntityControllerService,
    PostPropertyReferenceControllerService,
    ProfileControllerService,
    UserEntityControllerService,
    UserSearchControllerService,
    UserControllerService,
    PostControllerService,
    CommentControllerService,
    AuthenticationControllerService,
    FavouritePostControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
