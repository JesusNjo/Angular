import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecComponent } from './homec/homec.component';
import { ProductsComponent } from './products/products.component';
import { ContacsComponent } from './contacs/contacs.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
  {path: "", component : HomecComponent},
  {path: "products", component: ProductsComponent},
  {path: "contact", component: ContacsComponent},
  {path: "products/:productId", component: ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
