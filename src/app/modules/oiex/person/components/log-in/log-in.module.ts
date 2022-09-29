import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogInComponent } from "./log-in.component";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "../../../../theme.module";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [LogInComponent],
  imports: [
    TranslateModule,
    ThemeModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [LogInComponent],
})
export class LogInModule {}
