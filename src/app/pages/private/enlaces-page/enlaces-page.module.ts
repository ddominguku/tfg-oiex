import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnlacesPageComponent } from "./enlaces-page.component";
import { EnlacesPageRoutingModule } from "./enlaces-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [EnlacesPageComponent],
  imports: [CommonModule, EnlacesPageRoutingModule, TranslateModule],
})
export class EnlacesPageModule {}
