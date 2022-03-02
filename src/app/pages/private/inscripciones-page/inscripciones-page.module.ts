import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InscripcionesPageComponent } from "./inscripciones-page.component";
import { InscripcionesPageRoutingModule } from "./inscripciones-page-routing.module";

@NgModule({
  declarations: [InscripcionesPageComponent],
  imports: [CommonModule, InscripcionesPageRoutingModule],
})
export class InscripcionesPageModule {}
