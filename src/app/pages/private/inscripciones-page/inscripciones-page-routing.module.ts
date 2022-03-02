import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscripcionesPageComponent } from './inscripciones-page.component';

const routes: Routes = [
  {
    path: "",
    component: InscripcionesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesPageRoutingModule {}
