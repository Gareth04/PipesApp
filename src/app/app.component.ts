import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre = 'Arturia PENDRAGON';
  numero = 1000;
  obj = {
    nombre: 'Bryan'
  }
  mostrarNombre(){
    console.log(this.nombre)
    console.log(this.numero)
    console.log(this.obj)
  }
  constructor(private primengConfig : PrimeNGConfig){}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    
  }
}
