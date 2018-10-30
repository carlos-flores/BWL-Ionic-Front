import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPaises } from '../../models/lista-paises.model';

/**
 * Generated class for the DetalleListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-lista',
  templateUrl: 'detalle-lista.html',
})
export class DetalleListaPage {

  public lista: ListaPaises;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('***1***');
    console.log(this.navParams.get('lista'));
    this.lista = this.navParams.get('lista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleListaPage');
  }

}
