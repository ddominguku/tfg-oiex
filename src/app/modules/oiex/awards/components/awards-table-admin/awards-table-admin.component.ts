import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  public awardForm: FormGroup;

  constructor(
    private awardService: AwardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadAwards();
    this.initForm();
  }

  /**
   * @Description Initialise the carousel form
   */
   private initForm() {
    this.awardForm = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      position: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
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
    this.awardForm.reset();
    this.awardDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.awardNew = new AwardsModel();
    this.awardDialog = false;
  }

  /**
   * Add new award in table
   */
  public addAward() {
    this.awardNew = this.awardForm.value;
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
    this.awardForm.setValue(award);
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
}
