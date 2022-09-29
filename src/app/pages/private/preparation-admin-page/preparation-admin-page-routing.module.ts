import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreparationAdminPageComponent } from "./preparation-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: PreparationAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparationAdminPageRoutingModule {}
