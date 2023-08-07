import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { category } from '../../category/Models/category.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit{
  model : AddBlogPost;
  categories$?:Observable<category[]>
  constructor(private blogPostService:BlogPostService, private router:Router,
     private categoyService:CategoryService) {
   this.model = {
    title :'',
    shortDescription:'',
    content: '',
    featuredImageUrl: '',
    urlHandle: '',
    author: '',
    publishedDate:new Date(),
    isVisible: true,
    categories: []
   }
    
  }
  ngOnInit(): void {
    this.categories$= this.categoyService.getAllCategories();
  }

  onFormSubmit(): void{
    this.blogPostService.createBlogPost(this.model).subscribe({
      next: (res) =>{
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

}
