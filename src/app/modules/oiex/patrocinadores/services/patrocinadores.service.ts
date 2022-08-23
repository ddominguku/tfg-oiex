import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { PatrocinadorModel } from "../models/patrocinador.model";

@Injectable({
  providedIn: "root",
})
export class PatrocinadoresService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Centro de Observación y Teledetección Espacial, S.L.U.
   * @protected
   * @param {boolean} loading
   * @memberof PatrocinadoresService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {PatrocinadorModel} patrocinador para crear
   * @returns {Observable<PatrocinadorModel>}
   * @memberof PatrocinadoresService
   */
  public createPatrocinador(
    patrocinador: PatrocinadorModel
  ): Observable<PatrocinadorModel> {
    return this.httpClient.post<PatrocinadorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.patrocinadores}`,
      patrocinador
    );
  }

  /**
   * @description Devuelve todas los patrocinadores
   * @returns {Observable<PatrocinadorModel[]>}
   * @memberof PatrocinadoresService
   */
  public getPatrocinadores(): Observable<PatrocinadorModel[]> {
    const op = `Obtener todas los patrocinadores`;
    return this.httpClient.get<PatrocinadorModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.patrocinadores}`
    );
  }

  /**
   * @description Elimina un patrocinador
   * @returns {Observable<PatrocinadorModel>}
   * @memberof PatrocinadoresService
   */
  public deleteAward(idPatrocinador: number): Observable<PatrocinadorModel> {
    return this.httpClient.delete<PatrocinadorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.patrocinadores}/${idPatrocinador}`
    );
  }
}
