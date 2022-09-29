import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnlacesPageComponent } from "./enlaces-page.component";
import { EnlacesPageRoutingModule } from "./enlaces-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { LinksListModule } from "src/app/modules/oiex/links/components/links-list/links-list.module";

@NgModule({
  declarations: [EnlacesPageComponent],
  imports: [CommonModule, EnlacesPageRoutingModule, TranslateModule, LinksListModule],
})
export class EnlacesPageModule {}
