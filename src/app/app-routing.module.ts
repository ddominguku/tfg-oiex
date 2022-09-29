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
    path: "ediciones",
    loadChildren: () =>
      import("./pages/public/editions-page/editions-page.module").then(
        (m) => m.EditionsPageModule
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
  {
    path: "admin/premios",
    loadChildren: () =>
      import(
        "./pages/private/award-admin-page/award-admin-page.module"
      ).then((m) => m.AwardAdminPageModule),
  },
  {
    path: "admin/patrocinadores",
    loadChildren: () =>
      import(
        "./pages/private/sponsor-admin-page/sponsor-admin-page.module"
      ).then((m) => m.SponsorAdminPageModule),
  },
  {
    path: "admin/participantes",
    loadChildren: () =>
      import(
        "./pages/private/person-admin-page/person-admin-page.module"
      ).then((m) => m.PersonAdminPageModule),
  },
  {
    path: "admin/preparacion",
    loadChildren: () =>
      import(
        "./pages/private/preparation-admin-page/preparation-admin-page.module"
      ).then((m) => m.PreparationAdminPageModule),
  },
  {
    path: "admin/enlaces",
    loadChildren: () =>
      import(
        "./pages/private/link-admin-page/link-admin-page.module"
      ).then((m) => m.LinkAdminPageModule),
  },
  {
    path: "admin/ediciones",
    loadChildren: () =>
      import("./pages/private/editions-admin-page/editions-admin-page.module").then(
        (m) => m.EditionsAdminPageModule
      ),
  },
  {
    path: "admin/calendario",
    loadChildren: () =>
      import("./pages/private/calendar-admin-page/calendar-admin-page.module").then(
        (m) => m.CalendarAdminPageModule
      ),
  },

  { path: "**", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
