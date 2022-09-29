import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { PersonModel } from "../../models/person.model";
import { PersonService } from "../../services/person.service";
import { MessageService } from "primeng/api";
import { MailService } from "../../../mail/services/mail.service";
import { MailModel } from "../../../mail/models/mail.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register-person",
  templateUrl: "./register-person.component.html",
  styleUrls: ["./register-person.component.css"],
  providers: [MessageService],
})
export class RegisterPersonComponent implements OnInit {
  public imgRegister: String = environment.images.registro;
  public personRegister: PersonModel = new PersonModel();
  public registerForm: FormGroup;

  constructor(
    private personService: PersonService,
    private mailService: MailService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.personRegister = new PersonModel();
    this.initForm();
  }

  /**
   * @Description Initialise the register person form
   */
  private initForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      lastname1: ["", [Validators.required]],
      lastname2: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      birthdate: ["", [Validators.required]],
      center: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("[0-9 ]{9}")]],
      teacherName: ["", [Validators.required]],
      teacherEmail: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
    });
  }

  /**
   * @Description Resert the register form
   */
  public resetForm() {
    this.registerForm.reset();
  }

  /**
   * @Description Send an email to person
   */
  public sendRegistrationEmail(): void {
    var mail: MailModel = new MailModel();
    mail.to = this.personRegister.email;
    mail.subject = "Inscripción completada en Olimpiada Informática";
    mail.body =
      "Has sido registrado con éxito en la Olimpiada Informática de Extremadura. Próximamente contactaremos contigo para darte más información sobre el concurso.";
    this.mailService.sendEmail(mail).subscribe();
  }

  /**
   * @Description Registra el usuario
   */
  public register(): void {
    this.personRegister = this.registerForm.value;
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
