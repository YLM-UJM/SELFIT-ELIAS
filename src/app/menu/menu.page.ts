import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '/';
  selectedIndex = 0;

  pages = [
    {
      name: 'accueil',
      path: '/menu/accueil'
    },
    {
      name: 'calendrier',
      path: '/menu/calendrier'
    },
    {
      name: 'questionnaires',
      path: '/menu/questionnaires'
    },
    {
      name: 'ap',
      path: '/menu/ap'
    },
    {
      name: 'mes séances',
      path: '/menu/ap/mes-seances-saved'
    },
    {
      name: 'parametres',
      path: '/menu/parametres'
    },

  ];

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      //console.log(event)
      
      if (event.id != 1) {
        this.activePath = event.url;
      }
      //console.log(event.url);
    })
    
    //this.selectedIndex = this.pages.findIndex(page => page.name.toLowerCase() === path.toLowerCase());
  }

  ngOnInit() {

  }

}
