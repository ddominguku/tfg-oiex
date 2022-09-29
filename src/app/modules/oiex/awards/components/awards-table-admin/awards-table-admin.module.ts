import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AwardsTableAdminComponent } from "./awards-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AwardsTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [AwardsTableAdminComponent],
})
export class AwardsTableAdminModule {}
