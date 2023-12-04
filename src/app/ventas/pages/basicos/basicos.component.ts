import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombrelower: string = 'Arthur';
  nombreUpper: string = 'ARTHUR';
  nombreCompleto: string = 'ArTHur PENdragon';
  fecha: Date = new Date(); //Fecha obtenida a partir de js 
  
}
