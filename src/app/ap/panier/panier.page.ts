import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  selected_seance = [];
  server;
  user_seance;
  type;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { 
    this.server = this.authService.server;
  }

  ngOnInit() {

    this.selected_seance = history.state.selected_seance;

    console.log(this.selected_seance);
    let body = {
      seances: this.selected_seance
    };
    this.http.post(this.server + 'getSelectedSeance.php', body).subscribe(resData => {
      this.user_seance = resData;
      console.log(this.user_seance);
    });
  }


  goToDoSeance() {
    let body = {
      seances: this.user_seance
    }
    this.router.navigate(['./menu/ap/do-seance'], {state: {body}});
  }

loadingBetweenPage(page: string, info:Object) {

  this.loadingCtrl
  .create({ keyboardClose: true, message: 'Chargement...' })
  .then(loadingEl => {
    loadingEl.present();
    this.router.navigate([page], {state: {info}});
    setTimeout(() => {
      loadingEl.dismiss();
    }, 750);
  });
}




}
