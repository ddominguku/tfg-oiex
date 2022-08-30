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
  cols: any[];

  constructor(private awardService: AwardService) {}

  ngOnInit(): void {
    this.cols = [
      { field: "image", header: "Premio" },
      { field: "position", header: "Puesto" },
      { field: "name", header: "Nombre" },
      { field: "description", header: "Descripción" },
    ];

    this.awardService
      .getAwards()
      .subscribe((awardsReturn: AwardsModel[]) => {
        this.awards = awardsReturn;
        console.log(this.awards);
      });
  }
}
