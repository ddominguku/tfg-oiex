import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InscripcionesPageComponent } from "./inscripciones-page.component";
import { InscripcionesPageRoutingModule } from "./inscripciones-page-routing.module";
import { TranslateModule } from '@ngx-translate/core';
import { InscriptionsDashboardModule } from "src/app/modules/oiex/inscriptions/components/inscriptions-dashboard/inscriptions-dashboard.module";

@NgModule({
  declarations: [InscripcionesPageComponent],
  imports: [CommonModule, InscripcionesPageRoutingModule, TranslateModule, InscriptionsDashboardModule],
})
export class InscripcionesPageModule {}
