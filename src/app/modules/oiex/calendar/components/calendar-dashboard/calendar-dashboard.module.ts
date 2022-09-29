import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarDashboardComponent } from "./calendar-dashboard.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CalendarDashboardComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [CalendarDashboardComponent],
})
export class CalendarDashboardModule {}
