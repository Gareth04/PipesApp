import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

//Aqui se definira las rutas de la pagina
const routes: Routes = [
  {
  //Cuando no hay nada en la pagina y esta vacio se muestra esta
  path:'',
  component: BasicosComponent,
  pathMatch:'full'//El full se pone para definir que cuando la pagina no contiene nada o esta vacia se redirige a basico
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path:'numeros',
    component: NumerosComponent
  },
  {
    path:'ordenar',
    component: OrdenarComponent
  },
  {
    //Si no esta ninguno de los path, esta ruta lo redireccionara a home 
    path:'**',
    redirectTo: ''//los '' significa que lo redirecciona al path que contiene '' 
  }
 
];

@NgModule({
  imports: [
    //Aqui va las paginas en las cuales necesito hacer la navegacion  
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
