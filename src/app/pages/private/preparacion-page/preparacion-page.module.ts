import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparacionPageComponent } from "./preparacion-page.component";
import { PreparacionPageRoutingModule } from "./preparacion-page-routing.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PreparacionPageComponent],
  imports: [CommonModule, PreparacionPageRoutingModule, TranslateModule],
})
export class PreparacionPageModule {}
