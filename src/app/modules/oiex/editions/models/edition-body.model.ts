export class EditionBodyModel{
    id?: number;
    title: string;
    year: string;
    body: string;

    constructor(){
        this.title="";
        this.year="";
        this.body="";
    }
}