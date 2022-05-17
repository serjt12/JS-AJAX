import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { NumeroMayorComponent } from './numero-mayor/numero-mayor.component';
import { BuscarVocalesComponent } from './buscar-vocales/buscar-vocales.component';
import { AjaxComponent } from './ajax/ajax.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent,
    NumeroMayorComponent,
    BuscarVocalesComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
