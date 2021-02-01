import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import {infoSeance} from './infoSeance.model';

@Component({
  selector: 'app-feedback-seance',
  templateUrl: './feedback-seance.page.html',
  styleUrls: ['./feedback-seance.page.scss'],
})
export class FeedbackSeancePage implements OnInit {
  @Input() public infoSeance: infoSeance

eval = [];
feedback = {
  qualite: null,
  difficulte: null,
  id_bloc: null
};
server;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    public authService: AuthService,
    private http: HttpClient
  ) { 
    this.server = this.authService.server;
    for (let i =1; i< 11;i++) {
      this.eval.push({text:i});
    }

  }


  ngOnInit() {
    console.log(this.infoSeance);
  }

  selectValue(type: string, value: number) {
    if (type == 'qualite') {
      this.feedback.qualite = value;
    };
    if (type == 'difficulte') {
      this.feedback.difficulte = value;
    }

  }

  validateSeance() {
    console.log(this.feedback);
    if (this.feedback.qualite != null && this.feedback.difficulte != null) {
      if (this.infoSeance.id_bloc == this.infoSeance.nb_bloc) {
      this.feedback.id_bloc = this.infoSeance.selected_seance[this.infoSeance.id_bloc - 1];
      this.infoSeance.feedback_user.push(this.feedback);
      console.log(this.infoSeance.feedback_user);
      let body = {
        move: 'end',
        feedback_user: this.infoSeance.feedback_user,
        selected_bloc: this.infoSeance.selected_seance,
      };
      this.authService.userId.subscribe(userId => {
        let user_id = {
          user_id: userId
        };
        Object.assign(body,user_id);
        this.http.post(this.server + 'saveFeedbackSeance.php',body).subscribe(resData => {
          console.log(resData);
        });
      })
      this.router.navigate(['./menu/accueil']);

      this._dismiss(body);
      this.congratsAlert();
      } else {
        console.log(this.infoSeance.feedback_user);
        this.feedback.id_bloc = this.infoSeance.selected_seance[this.infoSeance.id_bloc - 1];
        this.infoSeance.feedback_user.push(this.feedback);
        console.log(this.infoSeance.feedback_user);
        let body = {
          move: 'next',
          feedback_user: this.infoSeance.feedback_user
        }
        this._dismiss(body);
      }


    } else {
      console.log('feedbakc manquant');
    }

  }

  _dismiss(data:object) {
    this.modalCtrl.dismiss(data);
  }

  async congratsAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Félicitations',
      //subHeader: 'Subtitle',
      message: 'Vous progressez !',
      buttons: ['MERCI']
    });

    await alert.present();
  }



}
