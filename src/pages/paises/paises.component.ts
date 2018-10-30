import { Component } from "@angular/core";
import { PaisesServices } from "../../services/paises.services";
import { ListaPaises } from '../../models/lista-paises.model';
import { NavController } from 'ionic-angular';
import { DetalleListaPage } from "../detalle-lista/detalle-lista";

@Component({
  selector: "app-paises",
  templateUrl: "paises.component.html"
})
export class PaisesPage {
  listas: ListaPaises[] = [];
  constructor(private navCtroller: NavController, public paisesServices: PaisesServices) {
    this.cargarTablasIdiomas();
  }

  cargarTablasIdiomas() {
    this.paisesServices
      .obtenerPaisesPorIdioma("Espanol")
      .subscribe((resp: any) => {
        console.log(resp);
        this.listas.push(resp);
      });
    this.paisesServices
      .obtenerPaisesPorIdioma("Ingles")
      .subscribe((resp: any) => {
        console.log(resp);
        this.listas.push(resp);
      });
  }

  listaSeleccionada(lista: ListaPaises){
    console.log('-----------------------');
    console.log(lista);
    this.navCtroller.push(DetalleListaPage,{lista:lista});
  }
}