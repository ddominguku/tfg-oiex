import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { AdminModel } from "../../models/admin.model";
import { PersonService } from "../../services/person.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
  providers: [MessageService],
})
export class LogInComponent implements OnInit {
  @Output() propagateActivateRegister = new EventEmitter<Boolean>();
  public imgLogin: String = environment.images.login;
  public adminLogin: AdminModel = new AdminModel();

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.adminLogin = new AdminModel();
  }

  /**
   * @description: Inicia sesión
   */
  public logIn(): void {
    this.personService
      .loginAdmin(this.adminLogin)
      .subscribe((adminReturn: AdminModel) => {
        this.adminLogin = adminReturn;
        console.log(this.adminLogin);
      });
  }
}
