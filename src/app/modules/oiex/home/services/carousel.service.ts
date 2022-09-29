import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CarouselModel } from "../models/carousel.model";

@Injectable({
  providedIn: "root",
})
export class CarouselService {
  protected serviceUrl = environment.apis.oiex;
  protected loadingSubject: BehaviorSubject<boolean>;
  servicesErrorManager: any;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Notifies the charging status of the service
   * @author Daniel Domínguez Tejada
   * @protected
   * @param {boolean} loading
   * @memberof CarouselService
   */
  protected notifyLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * @description Creates a new carousel
   * @param {CarouselModel} carousel to create
   * @returns {Observable<CarouselModel>}
   * @memberof CarouselService
   */
  public createCarousel(
    carousel: CarouselModel
  ): Observable<CarouselModel> {
    return this.httpClient.post<CarouselModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.carousel}`,
      carousel
    );
  }

  /**
   * @description Update carousel
   * @param {CarouselModel} carousel to update
   * @returns {Observable<CarouselModel>}
   * @memberof CarouselService
   */
  public updateCarousel(
    carousel: CarouselModel
  ): Observable<CarouselModel> {
    return this.httpClient.put<CarouselModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.carousel}`,
      carousel
    );
  }

  /**
   * @description return all carousels
   * @returns {Observable<CarouselModel[]>}
   * @memberof CarouselService
   */
  public getAll(): Observable<CarouselModel[]> {
    const op = `Get all carousels`;
    return this.httpClient.get<CarouselModel[]>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.carousel}`
    );
  }

  /**
   * @description Delete carousel
   * @returns {Observable<CarouselModel>}
   * @memberof CarouselService
   */
  public deleteCarousel(idCarousel: number): Observable<CarouselModel> {
    return this.httpClient.delete<CarouselModel>(
      `${this.serviceUrl.baseUrl}${environment.apis.oiex.endpoints.carousel}/${idCarousel}`
    );
  }
}
