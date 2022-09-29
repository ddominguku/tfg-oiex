import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinksListComponent } from "./links-list.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LinksListComponent],
  imports: [CommonModule, ThemeModule, TranslateModule],
  exports: [LinksListComponent],
})
export class LinksListModule {}
