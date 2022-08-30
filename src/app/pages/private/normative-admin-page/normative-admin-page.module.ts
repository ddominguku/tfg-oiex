import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativeAdminPageComponent } from "./normative-admin-page.component";
import { NormativePageRoutingModule } from "./normative-admin-page-routing.module";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { NormativesTableAdminModule } from "src/app/modules/oiex/normatives/components/normatives-table-admin/normatives-table-admin.module";

@NgModule({
  declarations: [NormativeAdminPageComponent],
  imports: [
    CommonModule,
    NormativePageRoutingModule,
    ThemeModule,
    TranslateModule,
    NormativesTableAdminModule,
  ],
})
export class NormativeAdminPageModule {}
