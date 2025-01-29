import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { AppComponent } from './app.component';  // Importar AppComponent
import { UserService } from './user.service';  // Importar el servicio UserService

@NgModule({
  declarations: [
    AppComponent  // Declaramos AppComponent aquí
  ],
  imports: [
    BrowserModule,
    CommonModule  // Asegúrate de agregar CommonModule si es necesario
  ],
  providers: [UserService],  // Agregar UserService a los providers
  bootstrap: [AppComponent]  // Indicamos que AppComponent es el componente raíz
})
export class AppModule { }
