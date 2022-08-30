import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "calendario",
    loadChildren: () =>
      import("./pages/public/calendario-page/calendario-page.module").then(
        (m) => m.CalendarioPageModule
      ),
  },
  {
    path: "enlaces",
    loadChildren: () =>
      import("./pages/public/enlaces-page/enlaces-page.module").then(
        (m) => m.EnlacesPageModule
      ),
  },
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/public/inicio-page/inicio-page.module").then(
        (m) => m.InicioPageModule
      ),
  },
  {
    path: "premios",
    loadChildren: () =>
      import("./pages/public/premios-page/premios-page.module").then(
        (m) => m.PremiosPageModule
      ),
  },
  {
    path: "preparacion",
    loadChildren: () =>
      import("./pages/public/preparacion-page/preparacion-page.module").then(
        (m) => m.PreparacionPageModule
      ),
  },
  {
    path: "normativa",
    loadChildren: () =>
      import("./pages/public/normativa-page/normativa-page.module").then(
        (m) => m.NormativaPageModule
      ),
  },
  {
    path: "iniciar-sesion",
    loadChildren: () =>
      import("./pages/public/log-in-page/log-in-page.module").then(
        (m) => m.LogInPageModule
      ),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./pages/public/register-page/register-page.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "faq",
    loadChildren: () =>
      import("./pages/public/faq-page/faq-page.module").then(
        (m) => m.FaqPageModule
      ),
  },
  {
    path: "administrar-cuenta",
    loadChildren: () =>
      import("./pages/private/aministrar-cuenta-page/admin-page.module").then(
        (m) => m.AdminPageModule
      ),
  },
  {
    path: "patrocinadores",
    loadChildren: () =>
      import("./pages/public/sponsor-page/sponsor-page.module").then(
        (m) => m.PatrocinadoresPageModule
      ),
  },
  {
    path: "admin/inicio",
    loadChildren: () =>
      import("./pages/private/home-admin-page/home-admin-page.module").then(
        (m) => m.HomeAdminPageModule
      ),
  },
  {
    path: "admin/normativa",
    loadChildren: () =>
      import(
        "./pages/private/normative-admin-page/normative-admin-page.module"
      ).then((m) => m.NormativeAdminPageModule),
  },
  { path: "**", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
