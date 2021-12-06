import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Pedro', 'Gomez'),
    new Persona('Maria', 'Lopez'),
    new Persona('Ana', 'Garcia'),
  ];

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    if (this.nombreInput.length > 0 && this.apellidoInput.length > 0) {
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      this.personas.push(persona1);
    }
  }
}
