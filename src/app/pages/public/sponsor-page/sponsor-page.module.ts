import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SponsorPageRoutingModule } from "./sponsor-page-routing.module";
import { ThemeModule } from "src/app/modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import {  SponsorListModule } from "src/app/modules/oiex/sponsors/components/patrocinadores-list/sponsors-list.module";
import { SponsorPageComponent } from "./sponsor-page.component";

@NgModule({
  declarations: [SponsorPageComponent],
  imports: [
    CommonModule,
    SponsorPageRoutingModule,
    ThemeModule,
    TranslateModule,
    SponsorListModule
  ],
})
export class PatrocinadoresPageModule {}
