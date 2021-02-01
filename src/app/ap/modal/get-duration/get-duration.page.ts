import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-get-duration',
  templateUrl: './get-duration.page.html',
  styleUrls: ['./get-duration.page.scss'],
})
export class GetDurationPage implements OnInit {

  temps = [
    {
      text: '10mn',
      value: 10
    },
    {
      text: '20mn',
      value: 20
    },
    {
      text: '30mn',
      value: 30
    },
    {
      text: '40mn',
      value: 40
    },
    {
      text: '50mn',
      value: 50
    },
    {
      text: '1h',
      value: 60
    },
    {
      text: '1h10',
      value: 70
    },
    {
      text: '1h20',
      value: 80
    },
    {
      text: '1h30',
      value: 90
    }
  ];

  selected_type = 'libre';

  temps_selected = [10];
  nb_bloc = 1;
  server;
  point_possible;
  SEANCE;
  best_seance = [];
  selected_seance = [];
  selected_seance_full = [];



  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private modalCtrl: ModalController
  ) { 
    this.server = this.authService.server;
  }

  ngOnInit() {
  }

  selectType(type: string) {
    this.selected_type = type;
  }

  getTemps(tps: number) {
    this.temps_selected = tps['value'];
    this.nb_bloc = tps['value'] / 10;
    this.point_possible = 0;
    this.authService.userId.subscribe(user_id => {
      let body = {
        user_id: user_id,
      };
      this.http.post(this.server + 'getSeance.php', body).subscribe(resData => {
        console.log(resData);
        this.SEANCE = resData;
        this.best_seance = this.SEANCE.slice(0,this.nb_bloc);
        console.log(this.best_seance);
        for (let i=0; i < this.best_seance.length;i++) {
          this.point_possible = parseInt(this.best_seance[i]['score'] ) + this.point_possible;
        }
      });
    });
    
  }

  validate() {
    if (this.selected_type === 'auto') {
      this.selected_seance_full = this.SEANCE.slice(0,this.nb_bloc);
      for (let i = 0; i< this.selected_seance_full.length; i++ ) {
        this.selected_seance.push(this.selected_seance_full[i]['id_seance']);
      }
    }
    let body = {
      nb_bloc: this.nb_bloc,
      point_possible: this.point_possible,
      best_seance: this.best_seance,
      temps_selected: this.temps_selected,
      type: this.selected_type,
      selected_seance: this.selected_seance
    }
    this._dismiss(body);
  }

  _dismiss(data:Object) {
    this.modalCtrl.dismiss(data);
  }

}
