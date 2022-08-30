import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterPageComponent } from "./register-page.component";
import { RegisterPersonModule } from "src/app/modules/oiex/person/components/register-person/register-person.module";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { RegisterPageRoutingModule } from "./register-page-routing.module";

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, RegisterPersonModule, TranslateModule, ThemeModule, RegisterPageRoutingModule],
})
export class RegisterPageModule {}
