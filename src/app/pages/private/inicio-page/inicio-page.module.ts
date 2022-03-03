import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicioPageComponent } from "./inicio-page.component";
import { InicioPageRoutingModule } from "./inicio-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [InicioPageComponent],
  imports: [CommonModule, InicioPageRoutingModule, TranslateModule],
})
export class InicioPageModule {}
