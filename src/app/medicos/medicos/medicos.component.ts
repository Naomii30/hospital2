import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  usuario = null;

  user = {
    id_medico: null,
    nombres: null,
    apellido: null,
    cmp: null
  }
  constructor(){
  }
  ngOnInit(): void {
  }
}