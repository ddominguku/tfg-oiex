import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeFrontComponent } from "./home-front.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HomeFrontComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [HomeFrontComponent]
})
export class HomeFrontModule {}
