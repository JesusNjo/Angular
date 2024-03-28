import { Component, OnInit, inject } from '@angular/core';
import { productList } from './products.mock';
import { ApiService } from 'src/service/api.service';
import { IProduct } from 'src/models/model.product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  //productList = productList;
  private productService = inject(ApiService);
  productList: IProduct[] = [];
  color?:string;

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      this.productList = data;
    });
  }
}
