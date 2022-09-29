
export class MailModel {
  from: String;
  to: String;
  subject: String;
  body: String;

  constructor() {
    this.from = "";
    this.to = "";
    this.subject = "";
    this.body = "";
  }
}
