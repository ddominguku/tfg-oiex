import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditionsAdminPageComponent } from "./editions-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: EditionsAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditionsAdminPageRoutingModule {}
