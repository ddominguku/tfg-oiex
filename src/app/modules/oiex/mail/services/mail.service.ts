import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { MailModel } from "../models/mail.model";

@Injectable({
  providedIn: "root",
})
export class MailService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifies the charging status of the service
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof MailService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Send an email
   * @param {MailModel} mailToSend to send
   * @returns {Observable<MailModel>}
   * @memberof MailService
   */
  public sendEmail(mailToSend: MailModel): Observable<MailModel> {
    return this.httpClient.post<MailModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.mail}`,
      mailToSend
    );
  }
}
