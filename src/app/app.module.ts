import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MedicosComponent } from './medicos/medicos/medicos.component';
import { MedicosLayoutComponent } from './layouts/medicos-layout/medicos-layout.component';
import { PacientesComponent } from './pacientes/pacientes/pacientes/pacientes.component';
import { ConsultasComponent } from './consultas/consultas/consultas/consultas.component';
import { especialidadesComponent } from './especialidades/especialidades/especialidades.component';
import { EspecialidadesLayoutComponent } from './layouts/especialidades-layout/especialidades-layout.component';
import { PacientesLayoutComponent } from './layouts/pacientes-layout/pacientes-layout.component';
import { ConsultasLayoutComponent } from './layouts/consultas-layout/consultas-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    MedicosComponent,
    MedicosLayoutComponent,
    especialidadesComponent,
    PacientesComponent,
    ConsultasComponent,
    EspecialidadesLayoutComponent,
    PacientesLayoutComponent,
    ConsultasLayoutComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
