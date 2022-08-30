import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativesTabviewComponent } from "./normatives-tabview.component";
import { ThemeModule } from '../../../../theme.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NormativesTabviewComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [NormativesTabviewComponent]
})
export class NormativesTabviewModule {}
