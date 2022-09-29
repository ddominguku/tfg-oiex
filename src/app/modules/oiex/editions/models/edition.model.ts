export class EditionModel{
    id?: number;
    awardPosition: string;
    name: string;
    center: string;
    preparatorName: string;
    modality: string;
    year: string;
    url: string;

    constructor(){
        this.awardPosition="";
        this.name="";
        this.center="";
        this.preparatorName="";
        this.modality="";
        this.year="";
        this.url="";

    }

}