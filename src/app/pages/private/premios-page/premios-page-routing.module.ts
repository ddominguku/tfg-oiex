import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PremiosPageComponent } from './premios-page.component';

const routes: Routes = [
  {
    path: "",
    component: PremiosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiosPageRoutingModule {}
