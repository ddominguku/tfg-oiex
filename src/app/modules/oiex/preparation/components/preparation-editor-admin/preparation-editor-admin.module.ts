import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparationEditorAdminComponent } from "./preparation-editor-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [PreparationEditorAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [PreparationEditorAdminComponent]
})
export class PreparationEditorAdminModule {}
