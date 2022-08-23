import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AministrarCuentaPageComponent } from "./aministrar-cuenta-page.component";

const routes: Routes = [
  {
    path: "",
    component: AministrarCuentaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCuentaPageRoutingModule {}
