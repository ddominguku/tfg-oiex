export class LinkModel {
  id?: number;
  name: string;
  url: string;
  section: string;

  constructor() {
    this.name = "";
    this.url = "";
    this.section = "";
  }
}
