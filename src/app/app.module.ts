import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPadreComponent } from './padre/padre.component';
import { AppHijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPadreComponent,
    AppHijoComponent,
    AppHermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe
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
