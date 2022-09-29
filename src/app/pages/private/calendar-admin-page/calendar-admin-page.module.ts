import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarAdminPageComponent } from "./calendar-admin-page.component";
import { CalendarAdminPageRoutingModule } from "./calendar-admin-page-routing.module";
import { ThemeModule } from "../../../modules/theme.module";
import { CalendarAdminTableModule } from "src/app/modules/oiex/calendar/components/calendar-admin-table/calendar-admin-table.module";

@NgModule({
  declarations: [CalendarAdminPageComponent],
  imports: [
    CommonModule,
    CalendarAdminPageRoutingModule,
    CalendarAdminTableModule,
    ThemeModule,
  ],
})
export class CalendarAdminPageModule {}
