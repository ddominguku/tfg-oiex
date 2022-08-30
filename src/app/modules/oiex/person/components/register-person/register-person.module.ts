import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterPersonComponent } from "./register-person.component";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "src/app/modules/theme.module";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { PanelModule } from "primeng/panel";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";

@NgModule({
  declarations: [RegisterPersonComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ThemeModule,
    InputTextModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    CalendarModule,
  ],
  exports: [RegisterPersonComponent],
})
export class RegisterPersonModule {}
