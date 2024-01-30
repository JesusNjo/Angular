import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPadreComponent } from './app-padre/app-padre.component';
import { AppHijoComponent } from './app-hijo/app-hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHermanoComponent } from './app-hermano/app-hermano.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPadreComponent,
    AppHijoComponent,
    AppHermanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  exports:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
