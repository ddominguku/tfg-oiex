import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { SponsorModel } from "../models/sponsor.model";

@Injectable({
  providedIn: "root",
})
export class SponsorService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifies the charging status of the service
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof SponsorService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Creates a new sponsor
   * @param {SponsorModel} sponsor to create
   * @returns {Observable<SponsorModel>}
   * @memberof SponsorService
   */
  public createSponsor(sponsorCreate: SponsorModel): Observable<SponsorModel> {
    return this.httpClient.post<SponsorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.sponsor}`,
      sponsorCreate
    );
  }

  /**
   * @description Update sponsor
   * @param {NormativeModel} normative to update
   * @returns {Observable<NormativeModel>}
   * @memberof NormativeService
   */
  public updateNormative(
    sponsorUpdate: SponsorModel
  ): Observable<SponsorModel> {
    return this.httpClient.put<SponsorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.sponsor}`,
      sponsorUpdate
    );
  }

  /**
   * @description return all sponsors
   * @returns {Observable<SponsorModel[]>}
   * @memberof SponsorService
   */
  public getAll(): Observable<SponsorModel[]> {
    const op = `Get all sponsors`;
    return this.httpClient.get<SponsorModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.sponsor}`
    );
  }

  /**
   * @description Delete sponsor
   * @returns {Observable<SponsorModel>}
   * @memberof SponsorService
   */
  public deleteSponsor(idSponsor: number): Observable<SponsorModel> {
    return this.httpClient.delete<SponsorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.sponsor}/${idSponsor}`
    );
  }
}
