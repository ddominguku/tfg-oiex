import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { EditionModel } from "../../models/edition.model";
import { EditionService } from "../../services/edition.service";

interface TypeSection {
  name: string;
}

@Component({
  selector: "app-editions-admin-table",
  templateUrl: "./editions-admin-table.component.html",
  styleUrls: ["./editions-admin-table.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class EditionsAdminTableComponent implements OnInit {
  public editionsList: EditionModel[] = [];
  public selectedEdition: EditionModel[] = [];
  public editionDialog: boolean;
  public editionNew: EditionModel = new EditionModel();
  public submitted: boolean;
  public yearSearch: String ="";
  public modalitySelected: TypeSection;
  public modalitySections: TypeSection[];

  constructor(
    private editionService: EditionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.modalitySelected = { name: "" };
    this.modalitySections = [
      { name: "MODALIDAD DE PROGRAMACIÓN" },
      { name: "MODALIDAD DE INGENIO" },
    ];
  }

  ngOnInit(): void {
    this.loadeditions();
  }

  /**
   * Load all editions
   */
  public loadeditions() {
    this.editionService.getEditions().subscribe((editionsReturn: EditionModel[]) => {
      this.editionsList = [...editionsReturn];
      console.log(this.editionsList);
    });
  }

  /**
   * Open dialog for add new edition
   */
  public openNew() {
    this.modalitySelected = { name: "" };
    this.editionNew = new EditionModel();
    this.submitted = false;
    this.editionDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.modalitySelected = { name: "" };
    this.editionNew = new EditionModel();
    this.submitted = false;
    this.editionDialog = false;
  }

  /**
   * Add new edition in table
   */
  public addEdition() {
    this.editionNew.modality = this.modalitySelected["name"];
    this.editionService
      .createEdition(this.editionNew)
      .subscribe((editionCreated: EditionModel) => {
        console.log(editionCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Edición añadida con éxito",
          life: 3000,
        });
        this.editionDialog = false;
        this.loadeditions();
      });
  }

  /**
   * Edit edition in table
   * @param edition To edit
   */
  public editEdition(edition: EditionModel) {
    this.editionNew = { ...edition };
    this.modalitySelected.name = edition.modality;
    this.editionDialog = true;
  }

  /**
   * Delete edition in table
   * @param editionDelete To delete
   */
  public deleteEdition(editionDelete: EditionModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar el item seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.editionService
          .deleteEdition(editionDelete.id)
          .subscribe((editionReturn: EditionModel) => {
            console.log(editionReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Edición eliminada con éxito",
              life: 3000,
            });
            this.loadeditions();
          });
        this.selectedEdition = null;
      },
    });
  }

  /**
   * Load all editions by year
   */
   public loadEditionsByYear(year : String) {
    this.editionService.getEditionsByYear(year).subscribe((editionsReturn: EditionModel[]) => {
      this.editionsList = [...editionsReturn];
      console.log(this.editionsList);
    });
  }
}
