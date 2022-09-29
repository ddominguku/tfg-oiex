import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarAdminPageComponent } from "./calendar-admin-page.component";

const routes: Routes = [
  {
    path: "",
    component: CalendarAdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarAdminPageRoutingModule {}
