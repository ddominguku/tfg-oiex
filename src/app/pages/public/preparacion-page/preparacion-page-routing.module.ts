import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreparacionPageComponent } from "./preparacion-page.component";

const routes: Routes = [
  {
    path: "",
    component: PreparacionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparacionPageRoutingModule {}
