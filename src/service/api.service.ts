import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category, IProduct } from 'src/models/model.product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private urlBase:string = 'https://fakestoreapi.com/products';
  private httpClient = inject(HttpClient);
  constructor() { }


  public getAllProduct():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.urlBase);
  }
  public getProductById(id:number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${this.urlBase}/${id}`);
  }
  public getProductsByOrder(sort:string): Observable<IProduct[]>{
    //const param = sort == '' ? 'asc' : sort;
    return this.httpClient.get<IProduct[]>(`${this.urlBase}?sort=${sort === '' ? 'asc' : sort}`);
  }
  public getCategoriesFromProducts(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.urlBase}/categories`);
  }
  public createProduct(product:IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${this.urlBase}`, product);
  }
  
  public modifyProduct(id:number,product:IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${this.urlBase}/${id}`,product);
  }
  public deleteProduct(id:number): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`${this.urlBase}/${id}`);
  }
  
}
