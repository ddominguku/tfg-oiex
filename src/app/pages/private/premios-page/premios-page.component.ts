import { Component, OnInit } from "@angular/core";
import { AwardsModel } from "src/app/modules/oiex/awards/models/awards.model";
import { AwardService } from "src/app/modules/oiex/awards/services/award.service";

@Component({
  selector: "app-premios-page",
  templateUrl: "./premios-page.component.html",
  styleUrls: ["./premios-page.component.css"],
})
export class PremiosPageComponent implements OnInit {
  awards: AwardsModel[] = [];
  award1: AwardsModel = new AwardsModel();
  cols: any[];

  constructor(private awardService: AwardService) {}

  ngOnInit(): void {
    this.cols = [
      { field: "imagen", header: "Premio" },
      { field: "puesto", header: "Puesto" },
      { field: "nombre", header: "Nombre" },
      { field: "descripcion", header: "Descripcion" },
    ];

    this.awardService
      .getAwards()
      .subscribe((awardsReturn: AwardsModel[]) => {
        this.awards = awardsReturn;
        console.log(this.awards);
      });

    /*this.award1.puesto = "1º";
    this.award1.nombre = "iPad 2ª generación";
    this.award1.descripcion =
      "Ganadores del concurso de programación y prueba de ingenio";
    this.award1.imagen = environment.images.ipad;
    this.awards.push(this.award1);
    this.awards.push(this.award1);
    this.award1.imagen = 'https://www.lg.com/co/images/monitores/md07504635/gallery/desktop-01.jpg'
    this.awards.push(this.award1);*/
  }
}
