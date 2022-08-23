import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonModel } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Output() propagateActivateRegister = new EventEmitter<Boolean>();
  public imgLogin: String = environment.images.login;
  public loginUser: PersonModel = new PersonModel();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
      this.loginUser= new PersonModel();
  }

  /**
   * @description: Inicia sesión
   */
  public logIn():void {
    this.loginUser.center = "Centro 1";
    this.loginUser.lastname1 = "Apellido 1";
    this.loginUser.lastname2 = "Apellido 2";
    this.loginUser.name = "Nombre";
    this.loginUser.phone = 978445;
    this.personService
      .loginPerson(this.loginUser)
      .subscribe((personReturn: PersonModel) => {
        this.loginUser = personReturn;
        console.log(this.loginUser);
      });
  }

  public showRegister(): void{
    this.propagateActivateRegister.emit(true);
  }
}
