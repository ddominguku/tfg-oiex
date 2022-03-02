import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./theme/layouts/main-layout/main-layout.component";
import { HeaderComponent } from "./theme/components/header/header.component";
import { MenuItemComponent } from "./theme/components/menu-item/menu-item.component";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, MenuItemComponent],
  imports: [MenubarModule, InputTextModule],
  exports: [MainLayoutComponent, HeaderComponent, MenuItemComponent],
})
export class ThemeModule {}
