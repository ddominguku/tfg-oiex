import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatrocinadoresPageComponent } from "./patrocinadores-page.component";
import { PatrocinadoresPageRoutingModule } from "./patrocinadores-page-routing.module";
import { ThemeModule } from "src/app/modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { PatrocinadoresListModule } from "src/app/modules/oiex/patrocinadores/components/patrocinadores-list/patrocinadores-list.module";

@NgModule({
  declarations: [PatrocinadoresPageComponent],
  imports: [
    CommonModule,
    PatrocinadoresPageRoutingModule,
    ThemeModule,
    TranslateModule,
    PatrocinadoresListModule
  ],
})
export class PatrocinadoresPageModule {}
