import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarioPageComponent } from "./calendario-page.component";
import { CalendarioPageRoutingModule } from "./calendario-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CalendarioPageComponent],
  imports: [CommonModule, CalendarioPageRoutingModule, TranslateModule],
})
export class CalendarioPageModule {}
