import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarPersona() {
    if (
      this.nombreInput.nativeElement.value.length > 0 &&
      this.apellidoInput.nativeElement.value.length > 0
    ) {
      let persona1 = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      );
      this.personaCreada.emit(persona1);
    }
  }
}
