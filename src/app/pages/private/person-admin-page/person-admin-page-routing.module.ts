import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonAdminPageComponent } from "./person-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: PersonAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonAdminPageRoutingModule {}
