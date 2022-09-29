import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { AwardsModel } from "../../models/awards.model";
import { AwardService } from "../../services/award.service";

@Component({
  selector: "app-awards-table-admin",
  templateUrl: "./awards-table-admin.component.html",
  styleUrls: ["./awards-table-admin.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class AwardsTableAdminComponent implements OnInit {
  public awardsList: AwardsModel[] = [];
  public selectedAwards: AwardsModel[] = [];
  public awardDialog: boolean;
  public awardNew: AwardsModel = new AwardsModel();
  public submitted: boolean;

  constructor(
    private awardService: AwardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadAwards();
  }

  /**
   * Load all awards
   */
  private loadAwards() {
    this.awardService.getAwards().subscribe((awardsReturn: AwardsModel[]) => {
      this.awardsList = [...awardsReturn];
      console.log(this.awardsList);
    });
  }

  /**
   * Open dialog for add new award
   */
  public openNew() {
    this.awardNew = new AwardsModel();
    this.submitted = false;
    this.awardDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.awardNew = new AwardsModel();
    this.submitted = false;
    this.awardDialog = false;
  }

  /**
   * Add new award in table
   */
  public addAward() {
    this.awardService
      .createAward(this.awardNew)
      .subscribe((awardCreated: AwardsModel) => {
        console.log(awardCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Premio añadido con éxito",
          life: 3000,
        });
        this.awardDialog = false;
        this.loadAwards();
      });
  }

  /**
   * Edit award in table
   * @param award To edit
   */
  public editAward(award: AwardsModel) {
    this.awardNew = { ...award };
    this.awardDialog = true;
  }

  /**
   * Delete award in table
   * @param awardDelete To delete
   */
  public deleteAward(awardDelete: AwardsModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar premio seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.awardService
          .deleteAward(awardDelete.id)
          .subscribe((awardReturn: AwardsModel) => {
            console.log(awardReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Premio eliminado con éxito",
              life: 3000,
            });
            this.loadAwards();
          });
        this.selectedAwards = null;
      },
    });
  }

  /**
   * Delete select normatives in table
   */
  deleteSelectedNormatives() {
    /*this.confirmationService.confirm({
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
    });*/
  }
}
