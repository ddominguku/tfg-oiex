import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AwardAdminPageComponent } from "./award-admin-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { AwardAdminPageRoutingModule } from "./award-admin-page-routing.module";
import { AwardsTableAdminModule } from "src/app/modules/oiex/awards/components/awards-table-admin/awards-table-admin.module";

@NgModule({
  declarations: [AwardAdminPageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    AwardAdminPageRoutingModule,
    AwardsTableAdminModule,
  ],
})
export class AwardAdminPageModule {}
