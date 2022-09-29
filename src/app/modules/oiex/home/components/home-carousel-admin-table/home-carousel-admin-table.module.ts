import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeCarouselAdminTableComponent } from "./home-carousel-admin-table.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeCarouselAdminTableComponent],
  imports: [CommonModule, ThemeModule, TranslateModule, ReactiveFormsModule],
  exports: [HomeCarouselAdminTableComponent],
})
export class HomeCarouselAdminTableModule {}
