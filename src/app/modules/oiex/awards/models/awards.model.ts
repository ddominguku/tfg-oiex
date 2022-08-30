export class AwardsModel {
  id?: number;
  name: String;
  position: string;
  description: String;
  image: String;

  constructor() {
    this.name = "";
    this.position = "";
    this.description = "";
    this.image = "";
  }
}
