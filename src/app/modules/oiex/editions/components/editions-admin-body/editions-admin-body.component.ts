import { Component, OnInit } from '@angular/core';
import { EditionBodyModel } from '../../models/edition-body.model';
import { ConfirmationService, MessageService } from "primeng/api";
import { EditionService } from '../../services/edition.service';

@Component({
  selector: 'app-editions-admin-body',
  templateUrl: './editions-admin-body.component.html',
  styleUrls: ['./editions-admin-body.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class EditionsAdminBodyComponent implements OnInit {

  public editionsList: EditionBodyModel[] = [];
  public selectedEdition: EditionBodyModel[] = [];
  public editionDialog: boolean;
  public editionNew: EditionBodyModel = new EditionBodyModel();
  public submitted: boolean;
  public yearSearch: String ="";

  constructor(
    private editionService: EditionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadEditions();
  }

  /**
   * Load all editions
   */
  public loadEditions() {
    this.editionService.getBodyEditions().subscribe((editionsReturn: EditionBodyModel[]) => {
      this.editionsList = [...editionsReturn];
      console.log(this.editionsList);
    });
  }

  /**
   * Open dialog for add new edition
   */
  public openNew() {
    this.editionNew = new EditionBodyModel();
    this.submitted = false;
    this.editionDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.editionNew = new EditionBodyModel();
    this.submitted = false;
    this.editionDialog = false;
  }

  /**
   * Add new edition in table
   */
  public addEdition() {
    this.editionService
      .createBodyEdition(this.editionNew)
      .subscribe((editionCreated: EditionBodyModel) => {
        console.log(editionCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Edición añadida con éxito",
          life: 3000,
        });
        this.editionDialog = false;
        this.loadEditions();
      });
  }

  /**
   * Edit edition in table
   * @param edition To edit
   */
  public editEdition(edition: EditionBodyModel) {
    this.editionNew = { ...edition };
    this.editionDialog = true;
  }

  /**
   * Delete edition in table
   * @param editionDelete To delete
   */
  public deleteEdition(editionDelete: EditionBodyModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar el item seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.editionService
          .deleteBodyEdition(editionDelete.id)
          .subscribe((editionReturn: EditionBodyModel) => {
            console.log(editionReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Edición eliminada con éxito",
              life: 3000,
            });
            this.loadEditions();
          });
        this.selectedEdition = null;
      },
    });
  }

  /**
   * Load all editions by year
   */
   public loadEditionsByYear(year : String) {
    this.editionService.getBodyEditionsByYear(year).subscribe((editionsReturn: EditionBodyModel[]) => {
      this.editionsList = [...editionsReturn];
      console.log(this.editionsList);
    });
  }

}
