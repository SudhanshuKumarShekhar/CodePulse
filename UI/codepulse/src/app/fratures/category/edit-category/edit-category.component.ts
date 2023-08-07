import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { category } from '../Models/category.model';
import { UpdateCategoryRequest } from '../Models/update-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id : string | null = null;
  category ?: category;
  constructor( private route : ActivatedRoute, private router: Router, private categoryService : CategoryService) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        this.id =  params.get('id');

        if(this.id){
          // get the data from api for this category Id
          this.categoryService.getCategoryById(this.id).subscribe({
            next : (res) =>{
              this.category = res;
            }
          })
        }
      }
    });
  }

  onFormSubmit() : void{
   const updateCategoryRequest : UpdateCategoryRequest = {
    name : this.category?.name ??'',
    urlHandle : this.category?.urlHandle ?? ''
   };
   // pass the object to service 
    if(this.id){
      this.categoryService.updateCategory(this.id, updateCategoryRequest).subscribe({
        next: (res) =>{
            this.router.navigateByUrl('/admin/categories');
        }
      });
    }
  }


  onDelete(){
    if(this.id){
      this.categoryService.deleteCategory(this.id).subscribe({
        next: (res) =>{
          this.router.navigateByUrl('/admin/categories');
      }
      });
    }
  }

}
