import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from 'src/app/services/medicos/medicos.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicoForm= new FormGroup({});
  medicos: any;

  constructor(
    public fb: FormBuilder,
    public medicosService: MedicosService,
  ) { }

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      idMedico:        [''],
      cmp:       ['', Validators.required],
      nombres:   ['', Validators.required],
      apellidos: ['', Validators.required],
    })

    this.medicosService.traerMedicos()?.subscribe(async medicos => {
      this.medicos = await medicos;
    });
  }
  hayRegistros(){
    return true;
  }
  guardar(): void{
    console.log(this.medicoForm.value);
    this.medicosService.guardarMedico(this.medicoForm.value).subscribe(resp => {
      this.medicoForm.reset();      
      this.medicos.push(resp);
      window.location.reload();
    },
      error => {console.error(error)}
    )
  }

  eliminar(medico:any){
    this.medicosService.borrarMedico(medico.idMedico).subscribe(resp => {
      
        this.medicos.pop(medico);
        window.location.reload();
      
    })
  }

}