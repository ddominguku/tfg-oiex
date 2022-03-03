import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InscripcionesPageComponent } from "./inscripciones-page.component";
import { InscripcionesPageRoutingModule } from "./inscripciones-page-routing.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InscripcionesPageComponent],
  imports: [CommonModule, InscripcionesPageRoutingModule, TranslateModule],
})
export class InscripcionesPageModule {}
