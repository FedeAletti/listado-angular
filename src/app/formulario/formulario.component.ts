import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  agregarPersona(
    nombreInput: HTMLInputElement,
    apellidoInput: HTMLInputElement
  ) {
    if (nombreInput.value.length > 0 && apellidoInput.value.length > 0) {
      let persona1 = new Persona(nombreInput.value, apellidoInput.value);
      this.personaCreada.emit(persona1);
    }
  }
}
