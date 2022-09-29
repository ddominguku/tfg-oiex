import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarAdminTableComponent } from "./calendar-admin-table.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CalendarAdminTableComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [CalendarAdminTableComponent],
})
export class CalendarAdminTableModule {}
