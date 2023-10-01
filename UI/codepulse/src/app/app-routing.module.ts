import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './fratures/category/category-list/category-list.component';
import { AddCategoryComponent } from './fratures/category/add-category/add-category.component';
import { EditCategoryComponent } from './fratures/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './fratures/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './fratures/blog-post/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './fratures/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './fratures/public/home/home.component';
import { BlogDetailsComponent } from './fratures/public/blog-details/blog-details.component';
import { LoginComponent } from './fratures/auth/login/login.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'blog/:url', component: BlogDetailsComponent
  },
  {
    path:'admin/categories', component: CategoryListComponent
  },
  {
    path:'admin/categories/add', component: AddCategoryComponent
  },
  {
    path:'admin/categories/:id', component: EditCategoryComponent
  },
  {
    path:'admin/blogposts', component: BlogpostListComponent
  },
  {
    path: 'admin/blogposts/add', component: AddBlogpostComponent
  },
  {
    path: 'admin/blogposts/:id', component: EditBlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
