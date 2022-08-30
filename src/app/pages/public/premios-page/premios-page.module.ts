import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PremiosPageComponent } from "./premios-page.component";
import { PremiosPageRoutingModule } from "./premios-page-routing.module";
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from "src/app/modules/theme.module";

@NgModule({
  declarations: [PremiosPageComponent],
  imports: [CommonModule, PremiosPageRoutingModule, TranslateModule, ThemeModule],
})
export class PremiosPageModule {}
