import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { bloc } from './bloc.model';
import { PhotoZoomPage } from './../photo-zoom/photo-zoom.page';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info-bloc',
  templateUrl: './info-bloc.page.html',
  styleUrls: ['./info-bloc.page.scss'],
})
export class InfoBlocPage implements OnInit {
  @Input() public bloc: bloc

  constructor(
    private modalCtrl: ModalController,
    public modalController: ModalController,
    public domSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    console.log(this.bloc);
  }

  _dismiss() {
    this.modalCtrl.dismiss();
  }

    // PRESENT MODAL TO GET INFO ON BLOC 
    async zoomPhoto(imageUrl: string) {
      console.log(imageUrl)
      const modal = await this.modalController.create({
        component: PhotoZoomPage,
        cssClass: 'zoom-photo-class',
        backdropDismiss: false,
        swipeToClose: true,
        componentProps: {
          imageUrl: imageUrl
        }
      });
  
      modal.onDidDismiss().then((data: any) => {
        //if (data.data)
          //this.fromModal = data.data.fromModal
      })
      return await modal.present();
    }

}
