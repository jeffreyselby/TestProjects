import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {

  private cerrarDialogoFormulario = new Subject<any>();


  constructor() { }


  getCerrarDialogoFormulario(): Subject<any> {
    return this.cerrarDialogoFormulario;
  }

  setCerrarDialogoFormulario(cerrarDialogoFormulario: any) {
    this.cerrarDialogoFormulario.next(cerrarDialogoFormulario);
  }

}