import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {}

  agregarPersona() {
    if (
      this.nombreInput.nativeElement.value.length > 0 &&
      this.apellidoInput.nativeElement.value.length > 0
    ) {
      let persona1 = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      );

      this.personasService.agregarPersona(persona1);
    }
  }
}
