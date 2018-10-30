import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';

/**  COMPONENTES */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PaisesPage } from '../pages/paises/paises.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


/* --- SERVICIOS --*/

import { PaisesServices } from '../services/paises.services';
import { LoginPage } from '../pages/login/login';
import { DetalleListaPage } from '../pages/detalle-lista/detalle-lista';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaisesPage,
    LoginPage,
    DetalleListaPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaisesPage,
    LoginPage,
    DetalleListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PaisesServices,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
