import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonAdminTableComponent } from "./person-admin-table.component";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "../../../../theme.module";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PersonAdminTableComponent],
  imports: [CommonModule, TranslateModule, ThemeModule, CalendarModule, FormsModule],
  exports: [PersonAdminTableComponent],
})
export class PersonAdminTableModule {}
