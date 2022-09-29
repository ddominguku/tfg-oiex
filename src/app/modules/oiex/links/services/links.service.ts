import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LinkModel } from "../models/link.model";

@Injectable({
  providedIn: "root",
})
export class LinkService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof LinkService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {LinkModel} link para crear
   * @returns {Observable<LinkModel>}
   * @memberof LinkService
   */
  public createLink(link: LinkModel): Observable<LinkModel> {
    return this.httpClient.post<LinkModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.link}`,
      link
    );
  }

  /**
   * @description Update link
   * @param {LinksModel} link to update
   * @returns {Observable<LinksModel>}
   * @memberof LinkService
   */
  public updateLink(link: LinkModel): Observable<LinkModel> {
    return this.httpClient.put<LinkModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.link}`,
      link
    );
  }

  /**
   * @description Devuelve todas los enlaces de interés
   * @returns {Observable<LinksModel[]>}
   * @memberof LinkService
   */
  public getLinks(): Observable<LinkModel[]> {
    const op = `Obtener todas los premios`;
    return this.httpClient.get<LinkModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.link}`
    );
  }

  /**
   * @description Elimina un enlace de interés
   * @returns {Observable<LinkModel>}
   * @memberof LinkService
   */
  public deleteLink(idLink: number): Observable<LinkModel> {
    return this.httpClient.delete<LinkModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.link}/${idLink}`
    );
  }
}
