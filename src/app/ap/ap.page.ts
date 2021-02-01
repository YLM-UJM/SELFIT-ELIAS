import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { GetDurationPage } from './modal/get-duration/get-duration.page';
import { InfoBlocPage } from './modal/info-bloc/info-bloc.page';


@Component({
  selector: 'app-ap',
  templateUrl: './ap.page.html',
  styleUrls: ['./ap.page.scss'],
})
export class APPage implements OnInit {

  server;
  SEANCE;

  nb_bloc_selected = 0;
  selected_seance = [];
  temps_selected;
  nb_bloc = 1;
  point_possible = 0;
  point_user = 0;
  pourcentage_user = '0%';
  best_seance = [];
  displayPoint = false;
  type = 'manual';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    public modalController: ModalController
  ) {
    this.server = this.authService.server;
   }

  ngOnInit() {



  }

  ionViewWillEnter() {
    this.nb_bloc = 1;
    this.best_seance = [];
    this.pourcentage_user = '0%';
    this.selected_seance = [];
    this.nb_bloc_selected = 0;
    this.temps_selected;
    this.point_user = 0;
    this.authService.userId.subscribe(user_id => {
      let body = {
        user_id: user_id,
      };
      this.http.post(this.server + 'getSeance.php', body).subscribe(resData => {
        console.log(resData);
        this.SEANCE = resData;
      });
      this.getTimeInfo();
    });
  }



  addToSelection(seance: Object) {

    //this.selected_seance.push(seance['id_seance']);
    console.log(seance);

    if (this.selected_seance.includes(seance['id_seance']) == false) {
      this.nb_bloc_selected += 1;
      console.log(this.nb_bloc_selected);
      console.log('false');
      this.selected_seance.push(seance['id_seance']);
      this.point_user = this.point_user + parseInt(seance['score']);
      this.pourcentage_user = Math.floor((this.point_user / this.point_possible) * 100).toString() + '%';
      console.log(this.pourcentage_user);


}  else {
  console.log('true');
  this.nb_bloc_selected -= 1;
  console.log(this.nb_bloc_selected);
 if (this.selected_seance.length == 1 ) {
   this.selected_seance = [];
   this.point_user = 0;
   this.pourcentage_user = '0%';
 } else {
   console.log(this.selected_seance);
   let index = this.selected_seance.indexOf(seance['id_seance']);
   if (index == 0) {
     this.selected_seance.shift();
     this.point_user = this.point_user - parseInt(seance['score']);
     this.pourcentage_user = Math.floor((this.point_user / this.point_possible) * 100).toString() + '%';
   } else {
    this.selected_seance.splice(index,index);
    this.point_user = this.point_user - parseInt(seance['score']);
    this.pourcentage_user = Math.floor((this.point_user / this.point_possible) * 100).toString() + '%';
   }
   console.log(index);

   console.log(this.selected_seance);

 }

}
//console.log(this.selected_seance);
  }

  goToPanier(selected_seance: any) {
    console.log(selected_seance);
    let body = {
      type: this.type
    }
    this.router.navigate(['./menu/ap/do-seance'], {state: {selected_seance, body}});
  }

  // PRESENT MODAL TO GET INFO ON BLOC 
  async getBlocInfo(seance: Object) {
    //console.log(seance)
    const modal = await this.modalController.create({
      component: InfoBlocPage,
      cssClass: 'info-bloc-class',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        bloc: seance
      }
    });

    modal.onDidDismiss().then((data: any) => {
      //if (data.data)
        //this.fromModal = data.data.fromModal
    })
    return await modal.present();
  }

      // PRESENT MODAL TO GET FEEDBACK ON SEANCE
      async getTimeInfo() {
        //console.log(seance)
        const modal = await this.modalController.create({
          component: GetDurationPage,
          cssClass: 'feedback-class',
          backdropDismiss: true,
          swipeToClose: true,

  
        });
    
        modal.onDidDismiss().then((data: any) => {
          console.log(data);
          if (data.data) {
            this.best_seance = data.data.best_seance;
            this.nb_bloc = data.data.nb_bloc;
            this.point_possible = data.data.point_possible;
            this.temps_selected = data.data.temps_selected;
            this.displayPoint = true;
            if (data.data.type === 'auto') {
              this.selected_seance = data.data.selected_seance;
              this.type = data.data.type;
              this.goToPanier(this.selected_seance);
            }
          }
          //if (data.data)
            //this.fromModal = data.data.fromModal
        })
        return await modal.present();
      }

      changeDuration() {
        this.getTimeInfo();
      }


}
