import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { NormativeModel } from "../models/normative.model";

@Injectable({
  providedIn: "root",
})
export class NormativeService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifies the charging status of the service
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof NormativeService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Creates a new normative
   * @param {NormativeModel} normative to create
   * @returns {Observable<NormativeModel>}
   * @memberof NormativeService
   */
  public createNormative(
    normative: NormativeModel
  ): Observable<NormativeModel> {
    return this.httpClient.post<NormativeModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.normative}`,
      normative
    );
  }

  /**
   * @description Update normative
   * @param {NormativeModel} normative to update
   * @returns {Observable<NormativeModel>}
   * @memberof NormativeService
   */
  public updateNormative(
    normative: NormativeModel
  ): Observable<NormativeModel> {
    return this.httpClient.put<NormativeModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.normative}`,
      normative
    );
  }

  /**
   * @description return all normatives
   * @returns {Observable<NormativeModel[]>}
   * @memberof NormativeService
   */
  public getAll(): Observable<NormativeModel[]> {
    const op = `Get all normatives`;
    return this.httpClient.get<NormativeModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.normative}`
    );
  }

  /**
   * @description Delete normative
   * @returns {Observable<NormativeModel>}
   * @memberof NormativeService
   */
  public deleteNormative(idNormative: number): Observable<NormativeModel> {
    return this.httpClient.delete<NormativeModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.normative}/${idNormative}`
    );
  }

  //TODO crear un método Get ordenado por el position en el back
  /**
   * @description return all normatives sorted by position
   * @returns {Observable<NormativeModel[]>}
   * @memberof NormativeService
   */
  public getNormativeSorted(): Observable<NormativeModel[]> {
    const op = `Obtain all normatives sorted by position`;
    return this.httpClient.get<NormativeModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.normative}/sorted`
    );
  }
}
