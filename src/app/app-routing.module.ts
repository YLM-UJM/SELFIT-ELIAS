import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: './menu/menu.module#MenuPageModule',
    // canLoad: [LoginGuard]
  },
  // {
  //   path: 'parametres',
  //   loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  // },
  // {
  //   path: 'ap',
  //   loadChildren: () => import('./ap/ap.module').then( m => m.APPageModule)
  // }
  // {
  //   path: '',
  //   loadChildren: './questionnaires/facit/facit.module#FacitPageModule'
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
