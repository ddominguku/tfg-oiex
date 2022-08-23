import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { PersonModel } from "../models/person.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifica el estado de carga del servicio
   * @author Centro de Observación y Teledetección Espacial, S.L.U.
   * @protected
   * @param {boolean} loading
   * @memberof PersonService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Crear una nueva entidad
   * @param {PersonModel} person para crear
   * @returns {Observable<PersonModel>}
   * @memberof PersonService
   */
  public createPerson(person: PersonModel): Observable<PersonModel> {
    return this.httpClient.post<PersonModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.person}`,
      person
    );
  }

  /**
   * @description Hace login de usuario
   * @param {PersonModel} person para logear
   * @returns {Observable<PersonModel>}
   * @memberof PersonService
   */
   public loginPerson(person: PersonModel): Observable<PersonModel> {
    return this.httpClient.post<PersonModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.person}/login`,
      person
    );
  }

  /**
   * @description Devuelve todas las personas
   * @returns {Observable<PersonModel[]>}
   * @memberof PersonService
   */
  public getPersons(): Observable<PersonModel[]> {
    const op = `Obtener todas las personas`;
    return this.httpClient.get<PersonModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.person}`
    );
  }

  /**
   * @description Elimina una persona
   * @returns {Observable<PersonModel>}
   * @memberof PersonService
   */
  public deletePerson(idPerson: number): Observable<PersonModel> {
    return this.httpClient.delete<PersonModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.person}/${idPerson}`
    );
  }
}
