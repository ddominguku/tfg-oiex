import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CalendarModel } from "../models/calendar.model";

@Injectable({
  providedIn: "root",
})
export class CalendarService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof CalendarService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {CalendarModel} calendar para crear
   * @returns {Observable<CalendarModel>}
   * @memberof CalendarService
   */
  public createCalendar(calendar: CalendarModel): Observable<CalendarModel> {
    return this.httpClient.post<CalendarModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.calendar}`,
      calendar
    );
  }

  /**
   * @description Update calendar
   * @param {CalendarsModel} calendar to update
   * @returns {Observable<CalendarsModel>}
   * @memberof CalendarService
   */
  public updateCalendar(calendar: CalendarModel): Observable<CalendarModel> {
    return this.httpClient.put<CalendarModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.calendar}`,
      calendar
    );
  }

  /**
   * @description Devuelve todas los eventos
   * @returns {Observable<CalendarsModel[]>}
   * @memberof CalendarService
   */
  public getCalendars(): Observable<CalendarModel[]> {
    const op = `Obtener todas los eventos`;
    return this.httpClient.get<CalendarModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.calendar}`
    );
  }

  /**
   * @description Elimina una edicion
   * @returns {Observable<CalendarModel>}
   * @memberof CalendarService
   */
  public deleteCalendar(idCalendar: number): Observable<CalendarModel> {
    return this.httpClient.delete<CalendarModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.calendar}/${idCalendar}`
    );
  }
}
