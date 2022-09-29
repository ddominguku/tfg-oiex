import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AwardAdminPageComponent } from "./award-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: AwardAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwardAdminPageRoutingModule {}
