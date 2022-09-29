import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonAdminPageComponent } from "./person-admin-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { PersonAdminPageRoutingModule } from "./person-admin-page-routing.module";
import { PersonAdminTableModule } from "src/app/modules/oiex/person/components/person-admin-table/person-admin-table.module";

@NgModule({
  declarations: [PersonAdminPageComponent],
  imports: [CommonModule, ThemeModule, PersonAdminPageRoutingModule, PersonAdminTableModule],
})
export class PersonAdminPageModule {}
