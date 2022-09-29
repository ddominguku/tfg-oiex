export class CalendarModel {
  id?: number;
  title: string;
  date: Date;

  constructor() {
    this.title = "";
    this.date = new Date();
  }
}
