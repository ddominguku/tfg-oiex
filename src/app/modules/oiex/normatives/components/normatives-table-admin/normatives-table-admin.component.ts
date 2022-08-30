import { Component, OnInit, ViewEncapsulation, OnChanges } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NormativeModel } from "../../models/normative.model";
import { NormativeService } from "../../services/normatives.service";

@Component({
  selector: "app-normatives-table-admin",
  templateUrl: "./normatives-table-admin.component.html",
  styleUrls: ["./normatives-table-admin.component.css"],
  providers: [MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None,
})
export class NormativesTableAdminComponent implements OnInit, OnChanges {
  public normativeList: NormativeModel[] = [];
  public selectedNormatives: NormativeModel[] = [];
  public normativeDialog: boolean;
  public normativeNew: NormativeModel = new NormativeModel();
  public submitted: boolean;

  constructor(
    private normativeService: NormativeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadNormatives();
  }

  ngOnChanges(): void {
    this.loadNormatives();
  }

  private loadNormatives() {
    this.normativeService
      .getAll()
      .subscribe((normativesReturn: NormativeModel[]) => {
        this.normativeList = [...normativesReturn];
        console.log(this.normativeList);
      });
  }

  public openNew() {
    this.normativeNew = new NormativeModel();
    this.submitted = false;
    this.normativeDialog = true;
  }

  public addNormative() {
    this.normativeService
      .createNormative(this.normativeNew)
      .subscribe((normativeCreated: NormativeModel) => {
        console.log(normativeCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Normativa y Objetivo añadido con éxito",
          life: 3000,
        });
        this.normativeDialog = false;
        this.loadNormatives();
      });
  }

  public editNormative(normative: NormativeModel) {
    this.normativeNew = { ...normative };
    this.normativeDialog = true;
  }

  public deleteNormative(normativeDelete: NormativeModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar la normativa y objetivo seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.normativeService
          .deleteNormative(normativeDelete.id)
          .subscribe((normativeReturn: NormativeModel) => {
            console.log(normativeReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Normativa y Objetivo eliminada con éxito",
              life: 3000,
            });
            this.loadNormatives();
          });
        this.selectedNormatives = null;
      },
    });
  }

  deleteSelectedNormatives() {
    this.confirmationService.confirm({
      message: "Está seguro de borrar la normativas y objetivos seleccionados?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.normativeList = this.normativeList.filter(
          (val) => !this.selectedNormatives.includes(val)
        );

        this.selectedNormatives = null;
        this.messageService.add({
          severity: "success",
          summary: "Completado",
          detail: "Normativas y Objetivos borrados",
          life: 3000,
        });
      },
    });
  }
}
