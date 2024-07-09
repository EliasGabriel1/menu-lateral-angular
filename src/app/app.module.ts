import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [] // Remover AppComponent daqui se ele é standalone
})
export class AppModule { }
