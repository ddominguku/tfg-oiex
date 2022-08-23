import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking
import esLocale from "@fullcalendar/core/locales/es";

@Component({
  selector: "app-calendario-page",
  templateUrl: "./calendario-page.component.html",
  styleUrls: ["./calendario-page.component.css"],
})
export class CalendarioPageComponent implements OnInit {
  public QRCode: string = environment.images.qr_code;

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

  constructor() {}

  ngOnInit(): void {
  }
}
