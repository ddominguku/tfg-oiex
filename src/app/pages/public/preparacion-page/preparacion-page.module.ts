import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparacionPageComponent } from "./preparacion-page.component";
import { PreparacionPageRoutingModule } from "./preparacion-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { PreparationFrontModule } from "src/app/modules/oiex/preparation/components/preparation-front/preparation-front.module";

@NgModule({
  declarations: [PreparacionPageComponent],
  imports: [
    CommonModule,
    PreparacionPageRoutingModule,
    TranslateModule,
    PreparationFrontModule,
  ],
})
export class PreparacionPageModule {}
