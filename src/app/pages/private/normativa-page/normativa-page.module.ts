import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativaPageComponent } from "./normativa-page.component";
import { NormativaPageRoutingModule } from "./normativa-page-routing.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NormativaPageComponent],
  imports: [CommonModule, NormativaPageRoutingModule, TranslateModule],
})
export class NormativaPageModule {}
