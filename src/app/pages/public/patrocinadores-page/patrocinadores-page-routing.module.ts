import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatrocinadoresPageComponent } from "./patrocinadores-page.component";

const routes: Routes = [
  {
    path: "",
    component: PatrocinadoresPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrocinadoresPageRoutingModule {}
