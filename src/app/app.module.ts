import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { LineaComponent } from './linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    CuadroComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
