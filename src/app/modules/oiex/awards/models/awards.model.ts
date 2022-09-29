export class AwardsModel {
  id?: number;
  name: String;
  position: string;
  description: String;
  image: String;

  constructor() {
    this.name = "";
    this.position = null;
    this.description = "";
    this.image = "";
  }
}
