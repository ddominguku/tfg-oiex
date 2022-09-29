import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditionsPageComponent } from "./editions-page.component";
import { EditionsPageRoutingModule } from "./editions-page-routing.module";
import { EditionsListModule } from "src/app/modules/oiex/editions/components/editions-list/editions-list.module";

@NgModule({
  declarations: [EditionsPageComponent],
  imports: [CommonModule, EditionsPageRoutingModule, EditionsListModule],
  exports: [EditionsPageComponent],
})
export class EditionsPageModule {}
