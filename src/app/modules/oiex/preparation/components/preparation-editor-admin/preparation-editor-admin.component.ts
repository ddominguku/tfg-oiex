import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { HomeService } from '../../../home/services/home.service';
import { PreparationModel } from '../../models/preparation.model';

@Component({
  selector: 'app-preparation-editor-admin',
  templateUrl: './preparation-editor-admin.component.html',
  styleUrls: ['./preparation-editor-admin.component.css'],
  providers: [MessageService],
})
export class PreparationEditorAdminComponent implements OnInit {

  preparationEditor: PreparationModel = new PreparationModel();
  vacio: string = "";

  constructor(private homeService: HomeService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadPreparation();
  }

  private loadPreparation(): void {
    this.homeService
      .getPreparation(1)
      .subscribe((preparationReturn: PreparationModel) => {
        this.preparationEditor = preparationReturn;
      });
  }

  /**
   * Update preparation page
   */
   public updatePreparation() {
    this.homeService
      .updatePreparation(this.preparationEditor)
      .subscribe((preparationReturned: PreparationModel) => {
        this.preparationEditor = preparationReturned;
        console.log(this.preparationEditor);
        this.messageService.add({
          severity: "success",
          summary: "Actualizada",
          detail: "Portada de preparación actualizada con éxito",
          life: 3000,
        });
      });
  }

  /**
   * Clear preparation
   */
  public clear (): void{
    this.preparationEditor.body = "";
  }

}
