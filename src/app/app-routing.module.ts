import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./vistas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-de-usuario',
    loadChildren: () => import('./vistas/registro-de-usuario/registro-de-usuario.module').then( m => m.RegistroDeUsuarioPageModule)
  },
  {
    path: 'registro-de-viajes',
    loadChildren: () => import('./vistas/registro-de-viajes/registro-de-viajes.module').then( m => m.RegistroDeViajesPageModule)
  },
  {
    path: 'listar-viajes',
    loadChildren: () => import('./vistas/listar-viajes/listar-viajes.module').then( m => m.ListarViajesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
