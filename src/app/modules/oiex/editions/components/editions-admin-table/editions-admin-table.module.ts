import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditionsAdminTableComponent } from "./editions-admin-table.component";
import { ThemeModule } from '../../../../theme.module';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [EditionsAdminTableComponent],
  imports: [CommonModule, ThemeModule,TranslateModule],
  exports: [EditionsAdminTableComponent]
})
export class EditionsAdminTableModule {}
