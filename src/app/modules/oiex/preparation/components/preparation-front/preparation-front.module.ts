import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparationFrontComponent } from "./preparation-front.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [PreparationFrontComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [PreparationFrontComponent],
})
export class PreparationFrontModule {}
