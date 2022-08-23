import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InscriptionsDashboardComponent } from "./inscriptions-dashboard.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [InscriptionsDashboardComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [InscriptionsDashboardComponent],
})
export class InscriptionsDashboardModule {}
