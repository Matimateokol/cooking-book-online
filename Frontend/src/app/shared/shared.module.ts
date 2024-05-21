import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostSummaryComponent } from "./post-summary/post-summary.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    PostSummaryComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    PostSummaryComponent,
  ]
})
export class SharedModule { }
