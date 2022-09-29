import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditionsAdminBodyComponent } from "./editions-admin-body.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { EditorModule } from "primeng/editor";

@NgModule({
  declarations: [EditionsAdminBodyComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, EditorModule],
  exports: [EditionsAdminBodyComponent]
})
export class EditionsAdminBodyModule {}
