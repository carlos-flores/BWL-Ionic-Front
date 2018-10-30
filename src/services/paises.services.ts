import { Injectable } from "@angular/core";
import { ListaPaises } from '../models/lista-paises.model';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class PaisesServices {
  listas: ListaPaises[] = [];
  public urlBase: string;
  constructor(public _http: HttpClient) {
    this.urlBase = "http://localhost:8080/api/paises";

    console.log("PaisesService inicializado correctamente...");
    const listaPaisesEspañol = new ListaPaises("Paises que hablan español");
    const listaPaisesIngles = new ListaPaises("Paises que hablan ingles");
    this.listas.push(listaPaisesEspañol);
    this.listas.push(listaPaisesIngles);
    console.log(this.listas);
  }

  obtenerPaisesPorIdioma(idioma: string) {
    console.log("Se obtienen los paises por idioma");
    const URL = this.urlBase + "/idioma/" + idioma;
    return this._http.get(URL).pipe(
      map((resp: any) => {
        const listaPaises = new ListaPaises("Paises que hablan " + idioma);
        listaPaises.paises = resp;
        return listaPaises;
      })
    );
  }
}