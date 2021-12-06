import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Pedro', 'Gomez'),
    new Persona('Maria', 'Lopez'),
    new Persona('Ana', 'Garcia'),
  ];

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola('Se agregó una persona');
    this.personas.push(persona);
  }
}
