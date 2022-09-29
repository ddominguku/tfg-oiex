import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinkAdminPageComponent } from "./link-admin-page.component";
import { LinkAdminPageRoutingModule } from "./link-admin-page-routing.module";
import { LinkAdminTableModule } from "src/app/modules/oiex/links/components/link-admin-table/link-admin-table.module";

@NgModule({
  declarations: [LinkAdminPageComponent],
  imports: [CommonModule, LinkAdminPageRoutingModule, LinkAdminTableModule],
})
export class LinkAdminPageModule {}
