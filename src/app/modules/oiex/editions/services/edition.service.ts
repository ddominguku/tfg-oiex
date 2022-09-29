import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { EditionModel } from "../models/edition.model";
import { EditionBodyModel } from "../models/edition-body.model";

@Injectable({
  providedIn: "root",
})
export class EditionService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof EditionService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {EditionModel} edition para crear
   * @returns {Observable<EditionModel>}
   * @memberof EditionService
   */
  public createEdition(edition: EditionModel): Observable<EditionModel> {
    return this.httpClient.post<EditionModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}`,
      edition
    );
  }

  /**
   * @description Update edition
   * @param {EditionsModel} edition to update
   * @returns {Observable<EditionsModel>}
   * @memberof EditionService
   */
  public updateEdition(edition: EditionModel): Observable<EditionModel> {
    return this.httpClient.put<EditionModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}`,
      edition
    );
  }

  /**
   * @description Devuelve todas los ediciones
   * @returns {Observable<EditionsModel[]>}
   * @memberof EditionService
   */
  public getEditions(): Observable<EditionModel[]> {
    const op = `Obtener todas los ediciones`;
    return this.httpClient.get<EditionModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}`
    );
  }

  /**
   * @description Devuelve todas los ediciones por año
   * @returns {Observable<EditionsModel[]>}
   * @memberof EditionService
   */
   public getEditionsByYear(yearSearch: String): Observable<EditionModel[]> {
    const op = `Obtener todas los resultados de ediciones por año`;
    return this.httpClient.get<EditionModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}/year/${yearSearch}`
    );
  }

  /**
   * @description Elimina una edicion
   * @returns {Observable<EditionModel>}
   * @memberof EditionService
   */
  public deleteEdition(idEdition: number): Observable<EditionModel> {
    return this.httpClient.delete<EditionModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}/${idEdition}`
    );
  }

  //TODO A PARTIR DE AQUI
  /**
   * @description Crear una nueva entidad
   * @param {EditionModel} edition para crear
   * @returns {Observable<EditionBodyModel>}
   * @memberof EditionService
   */
   public createBodyEdition(edition: EditionBodyModel): Observable<EditionBodyModel> {
    return this.httpClient.post<EditionBodyModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editionBody}`,
      edition
    );
  }

  /**
   * @description Update body edition
   * @param {EditionsModel} edition to update
   * @returns {Observable<EditionsModel>}
   * @memberof EditionService
   */
  public updateBodyEdition(edition: EditionBodyModel): Observable<EditionBodyModel> {
    return this.httpClient.put<EditionBodyModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editionBody}`,
      edition
    );
  }

  /**
   * @description Devuelve todas los cuerpos de ediciones
   * @returns {Observable<EditionBodyModel[]>}
   * @memberof EditionService
   */
  public getBodyEditions(): Observable<EditionBodyModel[]> {
    const op = `Obtener todas los cuerpos de ediciones`;
    return this.httpClient.get<EditionBodyModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editionBody}`
    );
  }

  /**
   * @description Devuelve todas los cuerpos de ediciones por año
   * @returns {Observable<EditionBodyModel[]>}
   * @memberof EditionService
   */
   public getBodyEditionsByYear(yearSearch: String): Observable<EditionBodyModel[]> {
    const op = `Obtener todas los resultados de ediciones por año`;
    return this.httpClient.get<EditionBodyModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editionBody}/year/${yearSearch}`
    );
  }

  /**
   * @description Elimina una cuerpo de una edición edicion
   * @returns {Observable<EditionBodyModel>}
   * @memberof EditionService
   */
  public deleteBodyEdition(idEdition: number): Observable<EditionBodyModel> {
    return this.httpClient.delete<EditionBodyModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.edition}/${idEdition}`
    );
  }
}
