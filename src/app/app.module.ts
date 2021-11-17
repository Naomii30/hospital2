import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MedicosComponent } from './medicos/medicos/medicos.component';
import { MedicosLayoutComponent } from './layouts/medicos-layout/medicos-layout.component';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes/pacientes/pacientes.component';
import { ConsultasComponent } from './consultas/consultas/consultas/consultas.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios/laboratorios/laboratorios.component';
import { EspecialidadesComponent } from './especialidades/especialidades/especialidades.component';
import { EspecialidadesLayoutComponent } from './layouts/especialidades-layout/especialidades-layout.component';
import { PacientesLayoutComponent } from './layouts/pacientes-layout/pacientes-layout.component';
import { ConsultasLayoutComponent } from './layouts/consultas-layout/consultas-layout.component';
import { LaboratoriosLayoutComponent } from './layouts/laboratorios-layout/laboratorios-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    MedicosComponent,
    MedicosLayoutComponent,
    EspecialidadesComponent,
    PacientesComponent,
    ConsultasComponent,
    LaboratoriosComponent,
    EspecialidadesLayoutComponent,
    PacientesLayoutComponent,
    ConsultasLayoutComponent,
    LaboratoriosLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
