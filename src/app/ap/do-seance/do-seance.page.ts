import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { FeedbackSeancePage } from './../modal/feedback-seance/feedback-seance.page';
import { AlertController } from '@ionic/angular';
import { IonSlides} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-seance',
  templateUrl: './do-seance.page.html',
  styleUrls: ['./do-seance.page.scss'],
})
export class DoSeancePage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  titre = 'Panier';

  display = false;
  selected_seance = [];
  server;
  user_seance;
  seanceNow = false;
  name_seance;

  slideOpt ={
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 1,
    centeredSlides: true
  };
  selectedSlide: any; 

  segment = 0;
  feedback_user = [];
  type;

  constructor(
    public modalController: ModalController,
    private http: HttpClient,
    private authService: AuthService,
    public alertController: AlertController,
    public domSanitizer: DomSanitizer,
    public router: Router
  ) { 
    this.server = this.authService.server;
    //console.log(history.state.body);
    //this.user_seance = history.state.body.seances;
    //this.display = true;
  }

  ngOnInit() {
    //console.log(history.state.body);  
    this.selected_seance = history.state.selected_seance;
    this.type = history.state.body.type;
    console.log(this.type);
    console.log(this.selected_seance);
    let body = {
      seances: this.selected_seance
    };
    this.http.post(this.server + 'getSelectedSeance.php', body).subscribe(resData => {
      this.user_seance = resData;
      console.log(this.user_seance);
    });

  }
  
  async segmentChanged(ev) {
    console.log(this.segment);
    await this.selectedSlide.slideTo(this.segment);
  }

  slidesChange(mySlider: IonSlides) {
    this.selectedSlide = mySlider;
    mySlider.getActiveIndex().then(selectedIndex => {
      console.log(selectedIndex);
      this.segment = selectedIndex;
    })

  }


  doSeance() {

    this.infoCommencerSeance();
  }

  // saveSeanceToDo() {
  //   this.askName();
  // }

  // onFinishSeance() {
  //   this.presentFeedback();

  // }

  blocTermine(id_bloc:number) {
    this.presentFeedback(id_bloc);
    //this.slides.slideNext();
  }


    // PRESENT MODAL TO GET FEEDBACK ON SEANCE
    async presentFeedback(id_bloc) {
      //console.log(seance)
      console.log(this.feedback_user);
      const modal = await this.modalController.create({
        component: FeedbackSeancePage,
        cssClass: 'feedback-class',
        backdropDismiss: true,
        swipeToClose: true,
        componentProps: {
          infoSeance: {
            id_bloc: id_bloc,
            nb_bloc: this.user_seance.length,
            feedback_user: this.feedback_user,
            selected_seance: this.selected_seance
          }

        }
      });
  
      modal.onDidDismiss().then((data: any) => {
        console.log(data);
        if (data.data) {
          console.log(data.data);
          if (data.data.move == 'next') {
          this.feedback_user = data.data.feedback_user;
          console.log(this.feedback_user)
          this.slides.slideNext();
          this.slidesChange(this.slides);
          }

        }
        //if (data.data)
          //this.fromModal = data.data.fromModal
      })
      return await modal.present();
    }

    // PRESENT POP UP 

    async askName() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Nom de la séance',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Entrer ici le nom de la seance.'
          }

        ],
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Valider',
            handler: (data) => {
              //console.log(data.name);
              if (data.name) {
                this.name_seance = data.name;
                let body = {
                  name: this.name_seance,
                  id_bloc: this.selected_seance
                };
                //this.authService.userId.subscribe(userId => {
                  //console.log(userId);
                  let user = {
                    user_id: 6
                  };
                  Object.assign(body,user);
                  console.log('exe');
                  this.http.post(this.server + 'saveSeance.php', body).subscribe(resData => {
                    console.log(resData);
                    this.router.navigate(['/menu/ap']);
                  })
              } 

              //})
            }
          }
        ]
      });
  
      await alert.present();
    }

    // PRESENT POP UP DEBUT DE SEANCE
    async infoCommencerSeance() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Début de séance',
        //subHeader: 'Subtitle',
        message: 'Réaliser le bloc 1 puis quand vous avez terminé, cliquex sur BLOC TERMINE, vous aurez simplement à donner un feedback sur ce bloc et vous irez directement au bloc suivant',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Commencer la séance',
            handler: () => {
              console.log('Confirm Okay');
              this.seanceNow = true;
              this.titre = 'SEANCE EN COURS';
            }
          }
        ]
      });
  
      await alert.present();
    }

}
