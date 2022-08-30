import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SponsorPageComponent } from "./sponsor-page.component";

const routes: Routes = [
  {
    path: "",
    component: SponsorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorPageRoutingModule {}
