import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AwardsTableAdminComponent } from "./awards-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AwardsTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, ReactiveFormsModule],
  exports: [AwardsTableAdminComponent],
})
export class AwardsTableAdminModule {}
