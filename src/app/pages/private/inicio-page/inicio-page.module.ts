import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicioPageComponent } from "./inicio-page.component";
import { InicioPageRoutingModule } from "./inicio-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from '../../../modules/theme.module';

@NgModule({
  declarations: [InicioPageComponent],
  imports: [CommonModule, InicioPageRoutingModule, TranslateModule, ThemeModule],
})
export class InicioPageModule {}
