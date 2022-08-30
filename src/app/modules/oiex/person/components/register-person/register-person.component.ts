import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { PersonModel } from "../../models/person.model";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-register-person",
  templateUrl: "./register-person.component.html",
  styleUrls: ["./register-person.component.css"],
})
export class RegisterPersonComponent implements OnInit {
  public imgRegister: String = environment.images.registro;
  public personRegister: PersonModel = new PersonModel();
  public passwordRepeat = '';


  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personRegister = new PersonModel();
  }

  /**
   * @Description Registra el usuario
   */
  public register(): void {
    this.personService
      .createPerson(this.personRegister)
      .subscribe((personReturn: PersonModel) => {
        this.personRegister = personReturn;
      });
  }
}
