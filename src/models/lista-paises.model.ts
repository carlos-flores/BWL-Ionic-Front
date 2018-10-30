import { PaisItem } from "./pais-item.model";

export class ListaPaises{
  id: number;
  titulo:string;
  creada: Date;
  paises: PaisItem[];

  constructor(titulo: string){
    this.id = new Date().getTime();
    this.titulo = titulo;
    this.creada = new Date();
    this.paises = [];
  }
}