import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { especialidadesService } from 'src/app/services/especialidades/especialidades.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class especialidadesComponent implements OnInit {

  especialidadesForm=new FormGroup({});
  especialidades: any;

  constructor(
    public fb: FormBuilder,
    public especialidadesService: especialidadesService,
  ) { }

  ngOnInit(): void {
    this.especialidadesForm = this.fb.group({
      idEspecialidad:        [''],
      nombre: ['', Validators.required],
    })

    this.especialidadesService.traerEspecialidad().subscribe(resp => {
      this.especialidades = resp;
    });
  }
  hayRegistros(){
    return true;
  }
  guardar(): void{
    console.log(this.especialidadesForm.value);
    this.especialidadesService.guardarEspecialidad(this.especialidadesForm.value).subscribe(resp => {
      this.especialidadesForm.reset();      
      this.especialidades.push(resp);
      location.reload()
    },
      error => {console.error(error)}
    )
  }

  eliminar(especialidades:any){
    this.especialidadesService.borrarEspecialidad(especialidades.idEspecialidad).subscribe(resp => {
        this.especialidades.pop(especialidades);
    })
  }
  editar(especialidades:any){
    this.especialidadesForm.setValue({
      idEspecialidad: especialidades.idEspecialidad,
      nombre: especialidades.nombre,
    })
  }
}
