import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativesTableAdminComponent } from "./normatives-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [NormativesTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [NormativesTableAdminComponent],
})
export class NormativesTableAdminModule {}
