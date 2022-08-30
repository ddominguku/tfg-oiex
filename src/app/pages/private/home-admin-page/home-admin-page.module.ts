import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeAdminPageComponent } from "./home-admin-page.component";
import { AdminPageRoutingModule } from "./home-admin-page-routing.module";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HomeAdminPageComponent],
  imports: [CommonModule, AdminPageRoutingModule, ThemeModule, TranslateModule],
})
export class HomeAdminPageModule {}
