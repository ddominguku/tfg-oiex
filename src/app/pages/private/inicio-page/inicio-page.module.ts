import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicioPageComponent } from "./inicio-page.component";
import { InicioPageRoutingModule } from "./inicio-page-routing.module";

@NgModule({
  declarations: [InicioPageComponent],
  imports: [CommonModule, InicioPageRoutingModule],
})
export class InicioPageModule {}
