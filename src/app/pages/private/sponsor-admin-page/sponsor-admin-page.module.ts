import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SponsorAdminPageComponent } from "./sponsor-admin-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { SponsorsTableAdminModule } from "src/app/modules/oiex/sponsors/components/sponsors-table-admin/sponsors-table-admin.module";
import { SponsorAdminPageRoutingModule } from "./sponsor-admin-page-routing.module";

@NgModule({
  declarations: [SponsorAdminPageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    TranslateModule,
    SponsorAdminPageRoutingModule,
    SponsorsTableAdminModule,
  ],
})
export class SponsorAdminPageModule {}
