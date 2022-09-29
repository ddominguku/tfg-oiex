import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking
import esLocale from "@fullcalendar/core/locales/es";
import { CalendarService } from "../../../modules/oiex/calendar/services/calendar.services";
import { CalendarModel } from "src/app/modules/oiex/calendar/models/calendar.model";

@Component({
  selector: "app-calendario-page",
  templateUrl: "./calendario-page.component.html",
  styleUrls: ["./calendario-page.component.css"],
})
export class CalendarioPageComponent implements OnInit {
  public QRCode: string = environment.images.qr_code;
  calendarList: CalendarModel[] = [];

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: esLocale,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: "Cumpleaños", date: "2022-04-19" },
      { title: "Tutoría TFG", date: "2022-04-08" },
      { title: "Inscripción", date: "2022-04-25" },
    ],
  };

  handleDateClick(arg) {
    alert(arg.dateStr);
  }

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  private loadEvents(): void {
    this.calendarService
      .getCalendars()
      .subscribe((calendarListReturn: CalendarModel[]) => {
        this.calendarList = calendarListReturn;
      });
  }

  /*private setEvents(): void{
    this.calendarOptions.eventAdd()
  }*/
}
