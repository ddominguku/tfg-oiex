export class AwardsModel {
  id?: number;
  puesto: String;
  nombre: string;
  descripcion: String;
  imagen: String;

  constructor() {
    this.puesto = "";
    this.nombre = "";
    this.descripcion = "";
    this.imagen = "";
  }
}
