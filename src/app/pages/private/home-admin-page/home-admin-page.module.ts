import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeAdminPageComponent } from "./home-admin-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { HomeAdminPageRoutingModule } from "./home-admin-page-routing.module";
import { HomeCarouselAdminTableModule } from "src/app/modules/oiex/home/components/home-carousel-admin-table/home-carousel-admin-table.module";
import { HomeEditorAdminModule } from "src/app/modules/oiex/home/components/home-editor-admin/home-editor-admin.module";

@NgModule({
  declarations: [HomeAdminPageComponent],
  imports: [
    CommonModule,
    HomeAdminPageRoutingModule,
    ThemeModule,
    TranslateModule,
    HomeCarouselAdminTableModule,
    HomeEditorAdminModule
  ],
})
export class HomeAdminPageModule {}
