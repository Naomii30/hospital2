import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
    private API_SERVI = "http://localhost:5432/consultas";
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    public traerConsultas(): Observable<any> {
      return this.httpClient.get(this.API_SERVI);
    }
  
    public guardarConsultas(consultas:any): Observable<any>{
      return this.httpClient.post(this.API_SERVI,consultas);
    }
  
    public borrarConsultas(id:any): Observable<any>{
      return this.httpClient.delete(this.API_SERVI +"/"+id);
    }
  }
  
