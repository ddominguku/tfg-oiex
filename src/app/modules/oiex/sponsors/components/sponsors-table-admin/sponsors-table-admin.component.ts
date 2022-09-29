import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { SponsorModel } from "../../models/sponsor.model";
import { SponsorService } from "../../services/sponsor.service";

@Component({
  selector: "app-sponsors-table-admin",
  templateUrl: "./sponsors-table-admin.component.html",
  styleUrls: ["./sponsors-table-admin.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class SponsorsTableAdminComponent implements OnInit {
  public sponsorsList: SponsorModel[] = [];
  public sponsorDialog: boolean;
  public sponsorNew: SponsorModel = new SponsorModel();
  public submitted: boolean;

  constructor(
    private sponsorService: SponsorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadSponsors();
  }

  /**
   * Load all sponsors
   */
  private loadSponsors() {
    this.sponsorService.getAll().subscribe((sponsorsReturn: SponsorModel[]) => {
      this.sponsorsList = [...sponsorsReturn];
      console.log(this.sponsorsList);
    });
  }

  /**
   * Open dialog for add new sponsor
   */
  public openNew() {
    this.sponsorNew = new SponsorModel();
    this.submitted = false;
    this.sponsorDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.sponsorNew = new SponsorModel();
    this.submitted = false;
    this.sponsorDialog = false;
  }

  /**
   * Add new sponsor in table
   */
  public addSponsor() {
    this.sponsorService
      .createSponsor(this.sponsorNew)
      .subscribe((sponsorCreated: SponsorModel) => {
        console.log(sponsorCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Patrocinador añadido con éxito",
          life: 3000,
        });
        this.sponsorDialog = false;
        this.loadSponsors();
      });
  }

  /**
   * Edit sponsor in table
   * @param sponsor To edit
   */
  public editSponsor(sponsor: SponsorModel) {
    this.sponsorNew = { ...sponsor };
    this.sponsorDialog = true;
  }

  /**
   * Delete sponsor in table
   * @param sponsorDelete To delete
   */
  public deleteSponsor(sponsorDelete: SponsorModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar patrocinador seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.sponsorService
          .deleteSponsor(sponsorDelete.id)
          .subscribe((sponsorReturn: SponsorModel) => {
            console.log(sponsorReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Patrocinador eliminado con éxito",
              life: 3000,
            });
            this.loadSponsors();
          });
      },
    });
  }
}
