import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { especialidadesComponent } from 'src/app/especialidades/especialidades/especialidades.component';
import { ConsultasService } from 'src/app/services/consultas/consultas.service';
import { especialidadesService } from 'src/app/services/especialidades/especialidades.service';
import { MedicosService } from 'src/app/services/medicos/medicos.service';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  [x: string]: any;
  consultasForm: any;
  consultas: any = {};
  idConsulta = 0;

  medicos: any;
  especialidades: any;
  pacientes: any;

  constructor(
    public fb: FormBuilder,
    public consultasService: ConsultasService,
    //servicio de medicos
    public medicosService: MedicosService,
    public especialidadesService: especialidadesService,
    public pacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.formularioConsultas=this.fb.group({
      fecha:["", Validators.required],
      consultorio:["", Validators.required],
      medico: ["", Validators.required],
      paciente: ["", Validators.required],
      especialidad: ["", Validators.required],
      
    })
    
  }
  hayRegistros(){
    return true;
  }
}

