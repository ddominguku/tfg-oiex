import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inicio-page",
  templateUrl: "./inicio-page.component.html",
  styleUrls: ["./inicio-page.component.css"],
})
export class InicioPageComponent {
  constructor(public router: Router) {}


  /**
   * @description: enlaza con pagina de registro
   */
  public navigateToRegister(): void {
    this.router.navigateByUrl("/registro");
  }
}
