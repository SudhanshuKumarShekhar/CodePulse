import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './fratures/category/category-list/category-list.component';
import { AddCategoryComponent } from './fratures/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { EditCategoryComponent } from './fratures/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './fratures/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './fratures/blog-post/add-blogpost/add-blogpost.component';
import { MarkdownModule } from 'ngx-markdown';
import { EditBlogpostComponent } from './fratures/blog-post/edit-blogpost/edit-blogpost.component';
import { ImageSelectorComponent } from './shared/components/image-selector/image-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    AddBlogpostComponent,
    EditBlogpostComponent,
    ImageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
