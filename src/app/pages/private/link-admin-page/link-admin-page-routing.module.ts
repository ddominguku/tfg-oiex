import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LinkAdminPageComponent } from "./link-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: LinkAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkAdminPageRoutingModule {}
