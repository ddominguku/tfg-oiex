import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "calendario",
    loadChildren: () =>
      import("./pages/private/calendario-page/calendario-page.module").then(
        (m) => m.CalendarioPageModule
      ),
  },
  {
    path: "enlaces",
    loadChildren: () =>
      import("./pages/private/enlaces-page/enlaces-page.module").then(
        (m) => m.EnlacesPageModule
      ),
  },
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/private/inicio-page/inicio-page.module").then(
        (m) => m.InicioPageModule
      ),
  },
  {
    path: "inscripciones",
    loadChildren: () =>
      import(
        "./pages/private/inscripciones-page/inscripciones-page.module"
      ).then((m) => m.InscripcionesPageModule),
  },
  {
    path: "premios",
    loadChildren: () =>
      import("./pages/private/premios-page/premios-page.module").then(
        (m) => m.PremiosPageModule
      ),
  },
  {
    path: "preparacion",
    loadChildren: () =>
      import("./pages/private/preparacion-page/preparacion-page.module").then(
        (m) => m.PreparacionPageModule
      ),
  },
  {
    path: "normativa",
    loadChildren: () =>
      import("./pages/private/normativa-page/normativa-page.module").then(
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
    path: "faq",
    loadChildren: () =>
      import("./pages/public/faq-page/faq-page.module").then(
        (m) => m.FaqPageModule
      ),
  },
  {
    path: "administrar-cuenta",
    loadChildren: () =>
      import(
        "./pages/private/aministrar-cuenta-page/aministrar-cuenta-page.module"
      ).then((m) => m.AministrarCuentaPageModule),
  },
  {
    path: "patrocinadores",
    loadChildren: () =>
      import(
        "./pages/public/patrocinadores-page/patrocinadores-page.module"
      ).then((m) => m.PatrocinadoresPageModule),
  },
  { path: "**", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
