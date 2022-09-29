export class SponsorModel {
  id?: number;
  name: String;
  description: String;
  image: String;
  url: string;

  constructor() {
    this.name = "";
    this.description ="";
    this.image = "";
    this.url = "";
  }
}
