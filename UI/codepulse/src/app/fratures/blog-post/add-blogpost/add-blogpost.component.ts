import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { category } from '../../category/Models/category.model';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit{
  model : AddBlogPost;
  categories$?:Observable<category[]>
  isImageSelectorVisible: boolean =false;
  constructor(private blogPostService:BlogPostService, private router:Router,
     private categoyService:CategoryService, private imageService:ImageService) {
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
    this.imageService.onSelectImage().subscribe({
      next :(selectedImage)=>{
        this.model.featuredImageUrl = selectedImage.url;
        this.closeImageSelector();
      }
    })
  }

  onFormSubmit(): void{
    this.blogPostService.createBlogPost(this.model).subscribe({
      next: (res) =>{
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

  OpenImageSelector() :void{
    this.isImageSelectorVisible =true;
}
closeImageSelector() :void{
this.isImageSelectorVisible=false;
}

}
