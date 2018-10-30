export class PaisItem{
  id: number;
  pais: string;
  idioma: string;

  constructor(id:number, pais: string, idioma:string){
  this.id = id;
  this.pais = pais;
  this.idioma = idioma;
  }
}