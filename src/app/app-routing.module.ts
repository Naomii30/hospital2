import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MedicosLayoutComponent } from './layouts/medicos-layout/medicos-layout.component';
import { EspecialidadesLayoutComponent } from './layouts/especialidades-layout/especialidades-layout.component';
import { PacientesLayoutComponent } from './layouts/pacientes-layout/pacientes-layout.component';
import { ConsultasLayoutComponent } from './layouts/consultas-layout/consultas-layout.component';



const routes: Routes = [
  //auth routes
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
    //app routes
  {
    path:'',
    component: DashboardLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path: 'dashboard',
        loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },

    ]
  },
  {
    path:'',
    component: MedicosLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/medicos',
        pathMatch:'full'
      },
      {
        path: 'medicos',
        loadChildren:()=> import('./medicos/medicos.module').then(m=>m.MedicosModule)
      },

    ]
  },
  {
    path:'',
    component: EspecialidadesLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/especialidades',
        pathMatch:'full'
      },
      {
        path: 'especialidades',
        loadChildren:()=> import('./especialidades/especialidades.module').then(m=>m.EspecialidadesModule)
      },

    ]
  },
  {
    path:'',
    component: PacientesLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/pacientes',
        pathMatch:'full'
      },
      {
        path: 'pacientes',
        loadChildren:()=> import('./pacientes/pacientes/pacientes.module').then(m=>m.PacientesModule)
      },

    ]
  },
  {
    path:'',
    component: ConsultasLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/consultas',
        pathMatch:'full'
      },
      {
        path: 'consultas',
        loadChildren:()=> import('./consultas/consultas/consultas.module').then(m=>m.ConsultasModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
