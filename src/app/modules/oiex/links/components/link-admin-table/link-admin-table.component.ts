import { Component, OnInit } from "@angular/core";
import { LinkModel } from "../../models/link.model";
import { LinkService } from "../../services/links.service";
import { ConfirmationService, MessageService } from "primeng/api";

interface TypeSection {
  name: string;
}

@Component({
  selector: "app-link-admin-table",
  templateUrl: "./link-admin-table.component.html",
  styleUrls: ["./link-admin-table.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class LinkAdminTableComponent implements OnInit {
  public linksList: LinkModel[] = [];
  public selectedlink: LinkModel[] = [];
  public linkDialog: boolean;
  public linkNew: LinkModel = new LinkModel();
  public submitted: boolean;
  public sectionSelected: TypeSection;

  public linksSections: TypeSection[];

  constructor(
    private linkService: LinkService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.sectionSelected = { name: "" };
    this.linksSections = [
      { name: "Otras Olimpiadas de Informática" },
      { name: "Para prepararse" },
    ];
  }

  ngOnInit(): void {
    this.loadlinks();
  }

  /**
   * Load all links
   */
  private loadlinks() {
    this.linkService.getLinks().subscribe((linksReturn: LinkModel[]) => {
      this.linksList = [...linksReturn];
      console.log(this.linksList);
    });
  }

  /**
   * Open dialog for add new link
   */
  public openNew() {
    this.sectionSelected = { name: "" };
    this.linkNew = new LinkModel();
    this.submitted = false;
    this.linkDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.sectionSelected = { name: "" };
    this.linkNew = new LinkModel();
    this.submitted = false;
    this.linkDialog = false;
  }

  /**
   * Add new link in table
   */
  public addlink() {
    this.linkNew.section = this.sectionSelected["name"];
    console.log(this.linkNew.section);
    this.linkService
      .createLink(this.linkNew)
      .subscribe((linkCreated: LinkModel) => {
        console.log(linkCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Enlace de interés añadido con éxito",
          life: 3000,
        });
        this.linkDialog = false;
        this.loadlinks();
      });
  }

  /**
   * Edit link in table
   * @param link To edit
   */
  public editlink(link: LinkModel) {
    this.linkNew = { ...link };
    this.sectionSelected.name = link.section;
    this.linkDialog = true;
  }

  /**
   * Delete link in table
   * @param linkDelete To delete
   */
  public deletelink(linkDelete: LinkModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar el enlace de interés seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.linkService
          .deleteLink(linkDelete.id)
          .subscribe((linkReturn: LinkModel) => {
            console.log(linkReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Enlace de interés eliminado con éxito",
              life: 3000,
            });
            this.loadlinks();
          });
        this.selectedlink = null;
      },
    });
  }
}
