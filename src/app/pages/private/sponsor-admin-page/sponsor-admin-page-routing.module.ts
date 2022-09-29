import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SponsorAdminPageComponent } from "./sponsor-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: SponsorAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorAdminPageRoutingModule {}
