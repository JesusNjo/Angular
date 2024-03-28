import { Component, OnInit, inject } from '@angular/core';
import { productList, Products } from '../products/products.mock';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { IProduct } from 'src/models/model.product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  //products = productList;
  //product?:Products;
  //loading:boolean = true;

  products?: IProduct[];
  product?:IProduct;

  color?:string;
  private _router = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      this.apiService.getProductById(Number(params['productId'])).subscribe(data=>{
        this.product = data;
        this.color = this.product.price as number > 100 ? 'red' : 'blue';
      });

    })

    
  }

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this._router.params.subscribe(params=>{
  //       this.product = this.products.find(product => product.id == params["productId"]);
  //       this.color = this.product?.price as number > 100 ? 'red' : 'blue';
  //       this.loading = false;
  //     })
  //   }, 100);
  // }
}
