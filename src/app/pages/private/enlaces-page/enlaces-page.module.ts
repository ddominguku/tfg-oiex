import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnlacesPageComponent } from "./enlaces-page.component";
import { EnlacesPageRoutingModule } from "./enlaces-page-routing.module";

@NgModule({
  declarations: [EnlacesPageComponent],
  imports: [CommonModule, EnlacesPageRoutingModule],
})
export class EnlacesPageModule {}
