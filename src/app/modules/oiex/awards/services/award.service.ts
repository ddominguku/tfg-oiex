import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AwardsModel } from "../models/awards.model";

@Injectable({
  providedIn: "root",
})
export class AwardService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof AwardService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {AwardsModel} award para crear
   * @returns {Observable<AwardsModel>}
   * @memberof AwardService
   */
  public createAward(award: AwardsModel): Observable<AwardsModel> {
    return this.httpClient.post<AwardsModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.award}`,
      award
    );
  }

  /**
   * @description Update award
   * @param {AwardsModel} award to update
   * @returns {Observable<AwardsModel>}
   * @memberof AwardService
   */
  public updateAward(award: AwardsModel): Observable<AwardsModel> {
    return this.httpClient.put<AwardsModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.award}`,
      award
    );
  }

  /**
   * @description Devuelve todas los premios
   * @returns {Observable<AwardsModel[]>}
   * @memberof AwardService
   */
  public getAwards(): Observable<AwardsModel[]> {
    const op = `Obtener todas los premios`;
    return this.httpClient.get<AwardsModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.award}`
    );
  }

  /**
   * @description Elimina un premio
   * @returns {Observable<AwardsModel>}
   * @memberof AwardService
   */
  public deleteAward(idAward: number): Observable<AwardsModel> {
    return this.httpClient.delete<AwardsModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.award}/${idAward}`
    );
  }
}
