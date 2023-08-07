import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model: AddCategoryRequest;
  
  constructor(private categoryService:CategoryService, private router:Router) {
  this.model = {
    name:'',
    urlHandle:''
  }
    
  }
  onFormSubmit(){
    this.categoryService.addCategory(this.model).subscribe({
      next: (res) =>{
        this.router.navigateByUrl('/admin/categories');
      },
      error: (err) =>{ }
    })
  }
}
