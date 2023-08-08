import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { category } from '../../category/Models/category.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit{

  id : string | null = null;
  model?: BlogPost;
  categories$?: Observable<category[]>;
  selectedCategories?: string[];
  isImageSelectorVisible: boolean =false;
  
  constructor(private route: ActivatedRoute, private blogPostService:BlogPostService,
     private categoryService:CategoryService, private router:Router,
     private imageService : ImageService) {
    
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();


    this.route.paramMap.subscribe({
      next: (params)=>{
        this.id= params.get('id');
      }
    });
     
    // get blogpost from api
    if(this.id){
      this.blogPostService.getBlogPostById(this.id).subscribe({
        next: res => {
          this.model = res;
          this.selectedCategories = res.categories.map(x => x.id);
        }
      });
    }

    this.imageService.onSelectImage().subscribe({
      next: (res)=>{
        if(this.model){
          this.model.featuredImageUrl = res.url;
          this.isImageSelectorVisible=false;
        }
      }
    })
  }

  onFormSubmit():void{
    //convert model to request object
    if(this.model && this.id){
      var updateBlogPost: UpdateBlogPost ={
        author : this.model.author,
        content: this.model.content,
        shortDescription: this.model.shortDescription,
        featuredImageUrl: this.model.featuredImageUrl,
        isVisible: this.model.isVisible,
        publishedDate: this.model.publishedDate,
        title: this.model.title,
        urlHandle:this.model.urlHandle,
        categories: this.selectedCategories??[]
        
      };

      this.blogPostService.updateBlogPost(this.id, updateBlogPost).subscribe({
        next: res =>{
          this.router.navigateByUrl('/admin/blogposts');
        }
      });
    }

  }

  onDelete():void{
    if(this.id){
      // call service to delete the post
      this.blogPostService.DeleteBlogPost(this.id).subscribe({
        next: (res)=> {
          this.router.navigateByUrl('/admin/blogposts');
        }
      });
    }
  }
  OpenImageSelector() :void{
        this.isImageSelectorVisible =true;
  }
  closeImageSelector() :void{
    this.isImageSelectorVisible=false;
  }

}
