export class PersonModel {
  id?: number;
  name: String;
  lastname1: String;
  lastname2: String;
  email: String;
  birthdate: Date;
  center?: String;
  phone: Number;
  teacherName: String;
  teacherEmail: String;

  constructor() {
    this.name = "";
    this.lastname1 = "";
    this.lastname2 = "";
    this.email = "";
    this.birthdate = new Date();
    this.center = "";
    this.phone = new Number();
    this.teacherName = "";
    this.teacherEmail = "";
  }
}
