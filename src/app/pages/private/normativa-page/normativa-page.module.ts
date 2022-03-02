import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NormativaPageComponent } from "./normativa-page.component";
import { NormativaPageRoutingModule } from "./normativa-page-routing.module";

@NgModule({
  declarations: [NormativaPageComponent],
  imports: [CommonModule, NormativaPageRoutingModule],
})
export class NormativaPageModule {}
