import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {imageUrl} from './imageUrl';

@Component({
  selector: 'app-photo-zoom',
  templateUrl: './photo-zoom.page.html',
  styleUrls: ['./photo-zoom.page.scss'],
})
export class PhotoZoomPage implements OnInit {
  @Input() public imageUrl: imageUrl;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
