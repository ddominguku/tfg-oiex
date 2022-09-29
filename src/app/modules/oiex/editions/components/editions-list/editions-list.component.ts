import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { EditionService } from "../../services/edition.service";
import { EditionModel } from "../../models/edition.model";
import { EditionBodyModel } from "../../models/edition-body.model";

@Component({
  selector: "app-editions-list",
  templateUrl: "./editions-list.component.html",
  styleUrls: ["./editions-list.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class EditionsListComponent implements OnInit {
  editionsList: EditionModel[] = [];
  bodyEditionList: EditionBodyModel[] = [];
  bodySelected: EditionBodyModel = new EditionBodyModel();

  ingenioList: EditionModel[] = [];
  programacionList: EditionModel[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  constructor(private editionService: EditionService) {}

  ngOnInit(): void {
    this.loadEditionsByYearForInit("2021");
    this.loadEditions();
    this.loadBodyEditions();
    this.castToList();
  }

  private loadEditions() {
    this.editionService
      .getEditions()
      .subscribe((editionsListReturn: EditionModel[]) => {
        this.editionsList = [...editionsListReturn];
        this.castToList();
        console.log(this.editionsList);
      });
  }

  public loadEditionsByYear(editionBody: EditionBodyModel) {
    this.bodySelected = editionBody;
    this.editionsList = [];
    this.editionService
      .getEditionsByYear(editionBody.year)
      .subscribe((editionsListReturn: EditionModel[]) => {
        this.editionsList = [...editionsListReturn];
        this.castToList();
        console.log(this.editionsList);
      });
  }

  public loadEditionsByYearForInit(year: String) {
    this.editionsList = [];
    this.editionService
      .getEditionsByYear(year)
      .subscribe((editionsListReturn: EditionModel[]) => {
        this.editionsList = [...editionsListReturn];
        this.castToList();
        console.log(this.editionsList);
      });
  }

  private loadBodyEditions() {
    this.editionService
      .getBodyEditions()
      .subscribe((listReturn: EditionBodyModel[]) => {
        this.bodySelected = listReturn[0];
        this.bodyEditionList = [...listReturn];
        this.castToList();
      });
  }


  private castToList(): void{
    this.programacionList = [];
    this.ingenioList = [];
    this.editionsList.forEach((edition: EditionModel) => {
      if (edition.modality === "MODALIDAD DE PROGRAMACIÓN")
        this.programacionList.push(edition);
        else
        this.ingenioList.push(edition);
    })
  }

}
