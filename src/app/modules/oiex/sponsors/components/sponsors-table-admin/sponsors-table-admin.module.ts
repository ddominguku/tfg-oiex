import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SponsorsTableAdminComponent } from "./sponsors-table-admin.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SponsorsTableAdminComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [SponsorsTableAdminComponent],
})
export class SponsorsTableAdminModule {}
