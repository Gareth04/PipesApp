import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre : string = 'Bryan';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes: string[]= ['Maria','Pedro','Pablo']
  clientesMapa={
    '=0': 'no tenenmos ningun cliente esperando',
    '=1': 'tenenmos un cliente esperando',
    '=2': 'tenenmos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarPersona(){
    this.nombre = 'Allison'
    this.genero = 'femenino'
  }
  borrarCliente(){
    this.clientes.pop();
  }
  //KeyValue Pipe

  persona = {
    nombre: 'Bryan',
    edad: 24,
    direccion: 'Guayaquil, Ecuador'
  }
  //json pipe
  heroes = [
    {
      nombre: 'Arturia Pendragon',
      clase: 'Saber'
    },
    {
      nombre: 'Medusa',
      clase: 'Ride'
    },
    {
      nombre: 'Morgana Le Fay',
      clase: 'Berserker'
    },
    {
      nombre: 'Gareth',
      clase: 'Lancer'
    },
  ]
  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('tenemos data de promesa');
    }, 3500);
  });
}
