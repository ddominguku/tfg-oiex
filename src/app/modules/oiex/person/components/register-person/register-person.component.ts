import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { PersonModel } from "../../models/person.model";
import { PersonService } from "../../services/person.service";
import { MessageService } from "primeng/api";
import { MailService } from '../../../mail/services/mail.service';
import { MailModel } from '../../../mail/models/mail.model';

@Component({
  selector: "app-register-person",
  templateUrl: "./register-person.component.html",
  styleUrls: ["./register-person.component.css"],
  providers: [MessageService],
})
export class RegisterPersonComponent implements OnInit {
  public imgRegister: String = environment.images.registro;
  public personRegister: PersonModel = new PersonModel();
  public birthdate: Date = null;


  constructor(private personService: PersonService, private mailService: MailService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.personRegister = new PersonModel();
  }

  public sendRegistrationEmail(): void{
    var mail: MailModel = new MailModel();
    mail.to = this.personRegister.email;
    mail.subject = "Inscripción completada en Olimpiada Informática";
    mail.body ="¡Se ha completado con éxito su inscripción en la Olimpiada informática, mucha suerte!"
    this.mailService.sendEmail(mail).subscribe();
  }

  /**
   * @Description Registra el usuario
   */
  public register(): void {
    this.personRegister.birthdate = this.birthdate;
    this.personService
      .createPerson(this.personRegister)
      .subscribe((personReturn: PersonModel) => {
        this.personRegister = personReturn;
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Registrado en las olimpiadas con éxito, ¡Mucha suerte!",
          life: 3000,
        });
        this.sendRegistrationEmail();
      });
  }



}
