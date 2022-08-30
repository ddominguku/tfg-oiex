import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "src/app/modules/theme.module";
import { CalendarioPageComponent } from "./calendario-page.component";
import { CalendarioPageRoutingModule } from "./calendario-page-routing.module";
import { FullCalendarModule } from "@fullcalendar/angular"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  resourceTimelinePlugin,
]);

@NgModule({
  declarations: [CalendarioPageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    CommonModule,
    TranslateModule,
    CalendarioPageRoutingModule,
    FullCalendarModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [CalendarioPageComponent],
})
export class CalendarioPageModule {}
