import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit{

  dataSource:any[]=[];
  jsonData:any;
  
  displayedColumns: string[] = ['productId','productName', 'productDescription', 'productActualPrice', 'productDiscountedPrice','Edit','Delete'];

  constructor(private productService:ProductService){
      
  }
  ngOnInit(): void {
     this.getAllProduct();

  }

  public getAllProduct():any{

    this.productService.getAllProduct().subscribe(
      (response:Product[])=>{
        this.dataSource=response;
        console.log(this.dataSource);


      },
      (error)=>{
        console.log(error);
      }
    )

  }


    public deleteProduct(productId:Number){

      this.productService.deleteProduct(productId).subscribe(
        (response)=>{
          // console.log("Delete Response"+response);
          this.getAllProduct();

        },
        (error)=>{
          console.log(error);
        }
      )

    }


}
