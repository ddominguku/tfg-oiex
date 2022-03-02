import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarioPageComponent } from "./calendario-page.component";
import { CalendarioPageRoutingModule } from "./calendario-page-routing.module";

@NgModule({
  declarations: [CalendarioPageComponent],
  imports: [CommonModule, CalendarioPageRoutingModule],
})
export class CalendarioPageModule {}
