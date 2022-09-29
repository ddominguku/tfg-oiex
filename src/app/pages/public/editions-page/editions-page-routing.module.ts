import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditionsPageComponent } from "./editions-page.component";

const routes: Routes = [
  {
    path: "",
    component: EditionsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditionsPageRoutingModule {}
