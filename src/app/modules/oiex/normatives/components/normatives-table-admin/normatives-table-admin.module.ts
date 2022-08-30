import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativesTableAdminComponent } from "./normatives-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [NormativesTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, ButtonModule],
  exports: [NormativesTableAdminComponent],
})
export class NormativesTableAdminModule {}
