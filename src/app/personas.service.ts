import { Persona } from './persona.model';

export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Pedro', 'Gomez'),
    new Persona('Maria', 'Lopez'),
    new Persona('Ana', 'Garcia'),
  ];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
