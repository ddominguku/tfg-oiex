import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { PersonModel } from "../../models/person.model";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-register-person",
  templateUrl: "./register-person.component.html",
  styleUrls: ["./register-person.component.css"],
})
export class RegisterPersonComponent implements OnInit {
  @Output() propagateActivateSigIn = new EventEmitter<Boolean>();
  public imgRegister: String = environment.images.registro;
  public personRegister: PersonModel = new PersonModel();
  public passwordRepeat = '';
  private alive = true;

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
        //console.log(this.personRegister);
      });
  }

  public activateSigIn(): void {
    this.propagateActivateSigIn.emit(true);
  }
}
