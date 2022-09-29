import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinkAdminTableComponent } from "./link-admin-table.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LinkAdminTableComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [LinkAdminTableComponent],
})
export class LinkAdminTableModule {}
