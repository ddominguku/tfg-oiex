import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativesTableAdminComponent } from "./normatives-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [NormativesTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, ReactiveFormsModule],
  exports: [NormativesTableAdminComponent],
})
export class NormativesTableAdminModule {}
