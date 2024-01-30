import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPadreComponent } from './app-padre/app-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
