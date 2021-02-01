import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.page.html',
  styleUrls: ['./questionnaires.page.scss'],
})
export class QuestionnairesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSF12() {
    this.router.navigate(['./menu/questionnaires/sf12']);
  }

  goToFACIT() {
    this.router.navigate(['./menu/questionnaires/facit']);
  }

  goToWEMWBS() {
    this.router.navigate(['./menu/questionnaires/wemwbs']);
  }

  goToCESD() {
    this.router.navigate(['./menu/questionnaires/cesd']);
  }

  goToISI() {
    this.router.navigate(['./menu/questionnaires/isi']);
  }

  goToBPI() {
    this.router.navigate(['./menu/questionnaires/bpi']);
  }

}
