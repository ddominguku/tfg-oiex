export class PatrocinadorModel {
  id?: number;
  nombre: String;
  imagen: String;
  url: string;

  constructor() {
    this.nombre = "";
    this.imagen = "";
    this.url = "";
  }
}
