import { Component, OnInit } from "@angular/core";
import { NormativeService } from "../../services/normatives.service";
import { NormativeModel } from "../../models/normative.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-normatives-tabview",
  templateUrl: "./normatives-tabview.component.html",
  styleUrls: ["./normatives-tabview.component.css"],
})
export class NormativesTabviewComponent implements OnInit {
  public normativeList: NormativeModel[] = [];

  constructor(
    private normativeService: NormativeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllNormatives();
  }

  private loadAllNormatives(): void {
    this.normativeService
      .getAll()
      .subscribe((normativesReturn: NormativeModel[]) => {
        this.normativeList = normativesReturn;
        console.log(this.normativeList);
      });
  }

  /**
   * @description: enlaza con pagina de iniciar sesión
   */
  public navigateToSigIn(): void {
    this.router.navigateByUrl("/iniciar-sesion");
  }
}
