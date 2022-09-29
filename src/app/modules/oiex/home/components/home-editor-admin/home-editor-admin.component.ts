import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { HomeEditorModel } from "../../models/home-editor.model";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-home-editor-admin",
  templateUrl: "./home-editor-admin.component.html",
  styleUrls: ["./home-editor-admin.component.css"],
  providers: [MessageService],
})
export class HomeEditorAdminComponent implements OnInit {
  homeEditor: HomeEditorModel = new HomeEditorModel();
  vacio: string = "";

  constructor(private homeService: HomeService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadBodyHome();
  }

  private loadBodyHome(): void {
    this.homeService
      .getBodyEditor(1)
      .subscribe((homeEditorReturn: HomeEditorModel) => {
        this.homeEditor = homeEditorReturn;
      });
  }

  /**
   * Update home page
   */
   public updateBody() {
    this.homeService
      .updateHomeEditor(this.homeEditor)
      .subscribe((homeEditorReturned: HomeEditorModel) => {
        this.homeEditor = homeEditorReturned;
        console.log(homeEditorReturned);
        this.messageService.add({
          severity: "success",
          summary: "Actualizada",
          detail: "Portada actualizada con éxito",
          life: 3000,
        });
      });
  }

  /**
   * Clear body
   */
  public clear (): void{
    this.homeEditor.body = "";
  }

}
