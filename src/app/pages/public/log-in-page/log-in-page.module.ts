import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogInPageComponent } from "./log-in-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { LogInModule } from "src/app/modules/oiex/person/components/log-in/log-in.module";
import { LogInPageRoutingModule } from "./log-in-page-routing.module";
import { RegisterPersonModule } from "../../../modules/oiex/person/components/register-person/register-person.module";

@NgModule({
  declarations: [LogInPageComponent],
  imports: [
    CommonModule,
    LogInModule,
    ThemeModule,
    TranslateModule,
    LogInPageRoutingModule,
    RegisterPersonModule,
    RegisterPersonModule,
  ],
})
export class LogInPageModule {}
