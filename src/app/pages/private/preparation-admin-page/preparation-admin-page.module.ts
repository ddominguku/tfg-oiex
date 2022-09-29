import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreparationAdminPageComponent } from "./preparation-admin-page.component";
import { ThemeModule } from "../../../modules/theme.module";
import { TranslateModule } from "@ngx-translate/core";
import { PreparationEditorAdminModule } from "src/app/modules/oiex/preparation/components/preparation-editor-admin/preparation-editor-admin.module";
import { PreparationAdminPageRoutingModule } from "./preparation-admin-page-routing.module";

@NgModule({
  declarations: [PreparationAdminPageComponent],
  imports: [CommonModule, ThemeModule, TranslateModule,PreparationAdminPageRoutingModule, PreparationEditorAdminModule],
})
export class PreparationAdminPageModule {}
