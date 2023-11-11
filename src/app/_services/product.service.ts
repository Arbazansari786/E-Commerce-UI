import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {

   }

   base_url="http://localhost:9999";



   public addProduct(product:FormData){
    console.log("************   "+product);
    return this.httpClient.post<Product>(this.base_url+"/product/add",product);

   }

   public getAllProduct(){
    console.log("Get All Products")
    return this.httpClient.get<Product[]>(this.base_url+"/allProducts");

   }

   public deleteProduct(productId:Number){
    return this.httpClient.delete(this.base_url+"/deleteProduct/"+productId,{responseType:'text'});
   }

}
