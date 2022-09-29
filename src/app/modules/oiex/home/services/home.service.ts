import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { HomeEditorModel } from "../models/home-editor.model";
import { Injectable } from "@angular/core";
import { PreparationModel } from '../../preparation/models/preparation.model';


@Injectable({
    providedIn: "root",
  })
export class HomeService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifies the charging status of the service
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof HomeService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Return home editor with concret id
   * @returns {Observable<HomeEditorModel[]>}
   * @memberof HomeService
   */
  public getBodyEditor(id: number): Observable<HomeEditorModel> {
    const op = `Obtener home editor with id: ${id}`;
    return this.httpClient.get<HomeEditorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editor}/${id}`
    );
  }

  /**
   * @description Creates a new body home
   * @param {HomeEditorModel} homeEditor to create
   * @returns {Observable<HomeEditorModel>}
   * @memberof HomeService
   */
  public createHomeEditor(
    homeEditor: HomeEditorModel
  ): Observable<HomeEditorModel> {
    return this.httpClient.post<HomeEditorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editor}`,
      homeEditor
    );
  }

  /**
   * @description Update body home
   * @param {HomeEditorModel} homeEditorUpdate to update
   * @returns {Observable<HomeEditorModel>}
   * @memberof HomeService
   */
  public updateHomeEditor(
    homeEditorUpdate: HomeEditorModel
  ): Observable<HomeEditorModel> {
    return this.httpClient.put<HomeEditorModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.editor}`,
      homeEditorUpdate
    );
  }

  /**
   * @description Return preparator with concret id
   * @returns {Observable<PreparationModel[]>}
   * @memberof HomeService
   */
   public getPreparation(id: number): Observable<PreparationModel> {
    const op = `Obtener preparation with id: ${id}`;
    return this.httpClient.get<PreparationModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.preparation}/${id}`
    );
  }

  /**
   * @description Creates a new preparation
   * @param {PreparationModel} preparation to create
   * @returns {Observable<PreparationModel>}
   * @memberof HomeService
   */
  public createPreparation(
    preparation: PreparationModel
  ): Observable<PreparationModel> {
    return this.httpClient.post<PreparationModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.preparation}`,
      preparation
    );
  }

  /**
   * @description Update preparation
   * @param {PreparationModel} preparationUpdate to update
   * @returns {Observable<PreparationModel>}
   * @memberof HomeService
   */
  public updatePreparation(
    preparationUpdate: PreparationModel
  ): Observable<PreparationModel> {
    return this.httpClient.put<PreparationModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.preparation}`,
      preparationUpdate
    );
  }
}
