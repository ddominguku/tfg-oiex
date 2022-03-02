import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PremiosPageComponent } from "./premios-page.component";
import { PremiosPageRoutingModule } from "./premios-page-routing.module";

@NgModule({
  declarations: [PremiosPageComponent],
  imports: [CommonModule, PremiosPageRoutingModule],
})
export class PremiosPageModule {}
