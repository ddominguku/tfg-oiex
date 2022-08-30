export class SponsorModel {
  id?: number;
  name: String;
  image: String;
  url: string;

  constructor() {
    this.name = "";
    this.image = "";
    this.url = "";
  }
}
