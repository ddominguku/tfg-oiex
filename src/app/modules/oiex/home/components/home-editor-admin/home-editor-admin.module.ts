import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeEditorAdminComponent } from "./home-editor-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from '@ngx-translate/core';
import { EditorModule } from "primeng/editor";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeEditorAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, FormsModule, ButtonModule, TableModule, EditorModule],
  exports: [HomeEditorAdminComponent]
})
export class HomeEditorAdminModule {}
