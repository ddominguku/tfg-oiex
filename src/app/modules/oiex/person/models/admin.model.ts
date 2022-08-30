export class AdminModel {
  id?: string;
  user: string;
  password: string;

  constructor() {
    this.user = "";
    this.password = "";
  }
}
