import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalogos',
    loadChildren: () =>
      import('./modules/catalogos/catalogos.module').then(
        (m) => m.CatalogosModule
      ),
    data: {
      roles: ["admin"]
    }
  },
  {
    path: 'listado-ots',
    loadChildren: () =>
      import('./modules/listado-ots/listado-ots.module').then(
        (m) => m.ListadoOtsModule
      ),
    data: {
      roles: ["admin"]
    }
  },
  {
    path: 'visor',
    loadChildren: () =>
      import('./modules/visor/visor.module').then(
        (m) => m.VisorModule
      ),
    data: {
      roles: ["admin"]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
