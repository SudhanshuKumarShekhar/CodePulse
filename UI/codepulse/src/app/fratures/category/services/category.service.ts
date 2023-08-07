import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { category } from '../Models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../Models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient) { }


    getAllCategories():Observable<category[]>{
      return this.http.get<category[]>(`${environment.baseUrl}Categories`);

    }
  addCategory(model: AddCategoryRequest) :Observable<void>{
    return this.http.post<void>(`${environment.baseUrl}Categories`,model);
  }
  getCategoryById(id: string): Observable<category>{
     return this.http.get<category>(`${environment.baseUrl}Categories/${id}`);
  }
  updateCategory(id : string, updateCategoryRequest: UpdateCategoryRequest): Observable<category>{
   return this.http.put<category>(`${environment.baseUrl}Categories/${id}`, updateCategoryRequest);

  }
  deleteCategory(id:string): Observable<category>{
   return this.http.delete<category>(`${environment.baseUrl}Categories/${id}`);
  }
}
