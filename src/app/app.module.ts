import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPadreComponent } from './padre/padre.component';
import { AppHijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from '../directive/estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from '../pipes/mi-pipe-personalizado.pipe';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomecComponent } from './homec/homec.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContacsComponent } from './contacs/contacs.component';
import { DniComponent } from './contacs/dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPadreComponent,
    AppHijoComponent,
    AppHermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe,
    ProductsComponent,
    HomecComponent,
    ProductsDetailsComponent,
    ContacsComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  exports:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
