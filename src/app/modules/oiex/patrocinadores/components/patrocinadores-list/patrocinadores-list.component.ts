import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { PatrocinadorModel } from "../../models/patrocinador.model";
import { PatrocinadoresService } from "../../services/patrocinadores.service";

@Component({
  selector: "app-patrocinadores-list",
  templateUrl: "./patrocinadores-list.component.html",
  styleUrls: ["./patrocinadores-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class PatrocinadoresListComponent implements OnInit {


  public patrocinadoresList: PatrocinadorModel[] = [];

  constructor(private patrocinadoresService: PatrocinadoresService) {}

  ngOnInit(): void {
    this.loadPatrocinadores();
  }

  private loadPatrocinadores(): void {
    this.patrocinadoresService
      .getPatrocinadores()
      .subscribe((patrocinadorReturn: PatrocinadorModel[]) => {
        this.patrocinadoresList = patrocinadorReturn;
        console.log(this.patrocinadoresList);
      });
  }
}
