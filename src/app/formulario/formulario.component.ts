import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    if (this.nombreInput.length > 0 && this.apellidoInput.length > 0) {
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      this.personaCreada.emit(persona1);
    }
  }
}
