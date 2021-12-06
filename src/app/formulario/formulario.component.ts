import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
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

  constructor(private loggingService: LoggingService) {}

  agregarPersona() {
    if (
      this.nombreInput.nativeElement.value.length > 0 &&
      this.apellidoInput.nativeElement.value.length > 0
    ) {
      let persona1 = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      );
      this.loggingService.enviarMensajeAConsola(
        `Enviamos persona: ${persona1.nombre} ${persona1.apellido}`
      );
      this.personaCreada.emit(persona1);
    }
  }
}
