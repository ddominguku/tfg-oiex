import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CalendarModel } from "../../models/calendar.model";
import { ConfirmationService, MessageService } from "primeng/api";
import { CalendarService } from "../../services/calendar.services";

@Component({
  selector: "app-calendar-admin-table",
  templateUrl: "./calendar-admin-table.component.html",
  styleUrls: ["./calendar-admin-table.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class CalendarAdminTableComponent implements OnInit {
  public calendarsList: CalendarModel[] = [];
  public selectedCalendar: CalendarModel[] = [];
  public calendarDialog: boolean;
  public calendarNew: CalendarModel = new CalendarModel();
  public submitted: boolean;
  public yearSearch: String = "";

  constructor(
    private calendarService: CalendarService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadcalendars();
  }

  /**
   * Load all calendars
   */
  public loadcalendars() {
    this.calendarService
      .getCalendars()
      .subscribe((calendarsReturn: CalendarModel[]) => {
        this.calendarsList = [...calendarsReturn];
        console.log(this.calendarsList);
      });
  }

  /**
   * Open dialog for add new calendar
   */
  public openNew() {
    this.calendarNew = new CalendarModel();
    this.submitted = false;
    this.calendarDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.calendarNew = new CalendarModel();
    this.submitted = false;
    this.calendarDialog = false;
  }

  /**
   * Add new calendar in table
   */
  public addCalendar() {
    this.calendarService
      .createCalendar(this.calendarNew)
      .subscribe((calendarCreated: CalendarModel) => {
        console.log(calendarCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Edición añadida con éxito",
          life: 3000,
        });
        this.calendarDialog = false;
        this.loadcalendars();
      });
  }

  /**
   * Edit calendar in table
   * @param calendar To edit
   */
  public editCalendar(calendar: CalendarModel) {
    this.calendarNew = { ...calendar };
    this.calendarDialog = true;
  }

  /**
   * Delete calendar in table
   * @param calendarDelete To delete
   */
  public deleteCalendar(calendarDelete: CalendarModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar el evento seleccionado?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.calendarService
          .deleteCalendar(calendarDelete.id)
          .subscribe((calendarReturn: CalendarModel) => {
            console.log(calendarReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminado",
              detail: "Evento eliminado con éxito",
              life: 3000,
            });
            this.loadcalendars();
          });
        this.selectedCalendar = null;
      },
    });
  }
}
