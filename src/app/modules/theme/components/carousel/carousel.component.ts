import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "src/environments/environment";
import { CarouselService } from "../../../oiex/home/services/carousel.service";
import { CarouselModel } from "../../../oiex/home/models/carousel.model";

@Component({
  selector: "the-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  carouselList: CarouselModel[] = [];
  img1 = environment.images.carousel_1;
  img2 = environment.images.carousel_3;
  img3 = environment.images.carousel_2;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.loadImagesCarousel();
  }

  private loadImagesCarousel(): void {
    this.carouselService
      .getAll()
      .subscribe((carouselListReturn: CarouselModel[]) => {
        this.carouselList = [...carouselListReturn];
        console.log(this.carouselList);
      });
  }
}
