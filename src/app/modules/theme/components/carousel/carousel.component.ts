import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "the-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  imagesCarousel: string[] = [];
  img1 = environment.images.carousel_1;
  img2 = environment.images.carousel_3;
  img3 = environment.images.carousel_2;

  constructor() {}


    ngOnInit(): void {
      this.addImagesCarousel();
    }
  
    addImagesCarousel(): void {
      this.imagesCarousel.push(this.img1);
      this.imagesCarousel.push(this.img2);
      this.imagesCarousel.push(this.img3);
    }
  }
