import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { MatIconModule } from "@angular/material/icon";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { FavouritePostsComponent } from './favourite-posts/favourite-posts.component';
import { CreatePostComponent } from "./create-post/create-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [{
  path: '',
  redirectTo: 'user-profile',
  pathMatch: 'full',
}, {
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component: DashboardComponent,
    },
    {
      path: 'favourite-posts',
      component: FavouritePostsComponent,
    },
    {
      path: 'user-profile',
      component: UserProfileComponent,
    },
    {
      path: "create-post",
      component: CreatePostComponent,
    },
  ]
}];

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    DashboardSidebarComponent,
    FavouritePostsComponent,
    CreatePostComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardModule {
}
