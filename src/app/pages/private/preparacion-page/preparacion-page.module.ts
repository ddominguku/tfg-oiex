import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparacionPageComponent } from "./preparacion-page.component";
import { PreparacionPageRoutingModule } from "./preparacion-page-routing.module";

@NgModule({
  declarations: [PreparacionPageComponent],
  imports: [CommonModule, PreparacionPageRoutingModule],
})
export class PreparacionPageModule {}
