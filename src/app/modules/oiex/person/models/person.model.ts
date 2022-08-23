export class PersonModel{

    id?: String;
    name: String;
    lastname1: String;
    lastname2: String;
    email: String;
    password: String;
    birthdate: Date;
    center?: String;
    phone: Number;

    constructor(){
        this.name='';
        this.lastname1='';
        this.lastname2='';
        this.email='';
        this.password='';
        this.birthdate= new Date();
        this.center='';
        this.phone = new Number;

    }


}