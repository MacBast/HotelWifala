import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormareservaComponent } from './formareserva/formareserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServicesComponent } from './services/services.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FormareservaComponent,
    HabitacionesComponent,
    DescripcionComponent,
    ServiciosComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
