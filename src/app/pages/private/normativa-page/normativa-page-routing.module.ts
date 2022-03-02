import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NormativaPageComponent } from "./normativa-page.component";

const routes: Routes = [
  {
    path: "",
    component: NormativaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormativaPageRoutingModule {}
