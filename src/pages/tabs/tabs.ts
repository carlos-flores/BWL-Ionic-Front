import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PaisesPage } from '../paises/paises.component';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PaisesPage;
  tab2Root = AboutPage;
  tab3Root = LoginPage;
  
  constructor() {

  }
}
