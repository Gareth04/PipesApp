import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la app
import  localesEC  from '@angular/common/locales/es-EC'; //Idioma de ecuador. El nombre de localesEC yo lo di
import  localesFR  from '@angular/common/locales/fr'; //Idioma de ecuador. El nombre de localesEC yo lo di
import { registerLocaleData } from '@angular/common';//Es una funcion 
registerLocaleData(localesEC);//Esto registra el español
registerLocaleData(localesFR);//Se lo registra llamando a la misma funcion





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    VentasModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-EC'} //En este punto globalizo el idioma e ingreso el tipo de idioma 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
