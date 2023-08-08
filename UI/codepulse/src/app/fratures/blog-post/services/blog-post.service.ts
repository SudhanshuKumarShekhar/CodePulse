import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor( private http:HttpClient) { }
  createBlogPost(data:AddBlogPost): Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.baseUrl}blogposts`,data);
  }
  getAllBlogPost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.baseUrl}blogposts`);
  }
  getBlogPostById(id:string): Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.baseUrl}blogposts/${id}`);
  }
  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.baseUrl}blogposts/${urlHandle}`);
  }
  updateBlogPost(id:string, updateBlogPost: UpdateBlogPost): Observable<BlogPost>{
    return this.http.put<BlogPost>(`${environment.baseUrl}blogposts/${id}`,updateBlogPost);
  }
  DeleteBlogPost(id:string): Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.baseUrl}blogposts/${id}`);
  }
}
