import { Component, OnInit } from "@angular/core";
import { PersonModel } from "../../models/person.model";
import { PersonService } from "../../services/person.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { MailModel } from "../../../mail/models/mail.model";
import { MailService } from "../../../mail/services/mail.service";

@Component({
  selector: "app-person-admin-table",
  templateUrl: "./person-admin-table.component.html",
  styleUrls: ["./person-admin-table.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class PersonAdminTableComponent implements OnInit {
  public personsList: PersonModel[] = [];
  public selectedpersons: PersonModel[] = [];
  public personDialog: boolean;
  public mailDialog: boolean;
  public personNew: PersonModel = new PersonModel();
  public mailNew: MailModel = new MailModel();
  public submitted: boolean;
  public teacherMail: String = "";
  public birthdate: Date;

  constructor(
    private personService: PersonService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private mailService: MailService
  ) {}

  ngOnInit(): void {
    this.loadpersons();
  }

  /**
   * Load all persons
   */
  private loadpersons() {
    this.personService
      .getPersons()
      .subscribe((personsReturn: PersonModel[]) => {
        this.personsList = [...personsReturn];
        console.log(this.personsList);
      });
  }

  /**
   * Open dialog for add new person
   */
  public openNew() {
    this.personNew = new PersonModel();
    this.submitted = false;
    this.birthdate = null
    this.personDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.personNew = new PersonModel();
    this.mailNew = new MailModel();
    this.submitted = false;
    this.personDialog = false;
    this.mailDialog = false;
  }

  /**
   * Add new person in table
   */
  public addperson() {
    this.personNew.birthdate = this.birthdate;
    this.personService
      .createPerson(this.personNew)
      .subscribe((personCreated: PersonModel) => {
        console.log(personCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Participante añadido con éxito",
          life: 3000,
        });
        this.personDialog = false;
        this.loadpersons();
      });
  }

  /**
   * Edit person in table
   * @param person To edit
   */
  public editperson(person: PersonModel) {
    this.personNew = { ...person };
    this.birthdate = new Date(person.birthdate);
    this.personDialog = true;
    
  }

  /**
   * Delete person in table
   * @param personDelete To delete
   */
  public deleteperson(personDelete: PersonModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar el participante seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.personService
          .deletePerson(personDelete.id)
          .subscribe((personReturn: PersonModel) => {
            console.log(personReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Participante eliminado con éxito",
              life: 3000,
            });
            this.loadpersons();
          });
        this.selectedpersons = null;
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

  /**
   * Open dialog email
   * @param person teacher to send email
   */
  public openDialogMail(person: PersonModel): void {
    this.mailDialog = true;
    this.mailNew.to = person.teacherEmail;
  }

  /**
   * Send an email to teacher
   */
  public sendMail() {
    this.mailService
      .sendEmail(this.mailNew)
      .subscribe((mailSended: MailModel) => {
        console.log(mailSended);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Email enviado al profesor con éxito",
          life: 3000,
        });
        this.mailDialog = false;
        this.mailNew.to = "";
      });
  }
}
