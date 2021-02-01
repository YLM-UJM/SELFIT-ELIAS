import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'accueil',
        loadChildren: '../accueil/accueil.module#AccueilPageModule'
      },
      {
        path: 'calendrier',
        loadChildren: '../calendrier/calendrier.module#CalendrierPageModule'
      },
      {
        path: 'questionnaires',
        loadChildren: '../questionnaires/questionnaires.module#QuestionnairesPageModule'
      },
      {
        path: 'activite-perso',
        loadChildren: '../activite-perso/activite-perso.module#ActivitePersoPageModule'
      },
      {
        path: 'ap',
        loadChildren: '../ap/ap.module#APPageModule'
      },
      {
        path: 'parametres',
        loadChildren: '../parametres/parametres.module#ParametresPageModule'
      },
      {
        path: 'materiel',
        loadChildren: '../parametres/materiel/materiel.module#MaterielPageModule'
      },
      {
        path: 'panier',
        loadChildren: '../ap/panier/panier.module#PanierPageModule'
      },
      {
        path: 'do-seance',
        loadChildren: '../ap/do-seance/do-seance.module#DoSeancePageModule'
      },
      {
        path: 'mes-seances',
        loadChildren: '../ap/mes-seances-saved/mes-seances-saved.module#MesSeancesSavedPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/accueil'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
