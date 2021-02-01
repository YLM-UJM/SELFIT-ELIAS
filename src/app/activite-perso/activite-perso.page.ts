import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { SaveQuestionnaireService } from '../service/save-questionnaire.service';

@Component({
  selector: 'app-activite-perso',
  templateUrl: './activite-perso.page.html',
  styleUrls: ['./activite-perso.page.scss'],
})
export class ActivitePersoPage implements OnInit {

  questions = [

    {
      id: 1,
      type: 'singleChoice',
      text: 'Modalité de l\'activité',
      answer: '',
      items: [
        { id: 1, text: 'Marche lente', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 2, text: 'Marche rapide', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 3, text: 'Footing lent', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 4, text: 'Footing rapide', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 5, text: 'Renforcement musculaire', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 6, text: 'Vélo', other : {placeholder: 'Précisez', required: true, answer: '' }},
        { id: 10, text: 'Autre', other: {placeholder: 'Précisez', required: true, answer: '' }}
      ],
      required: true
    },
    {
      id: 2,
      type: 'singleChoice',
      text: 'Durée de la séance',
      items: [
        {text: '10 mn', value: 10},
        {text: '20 mn', value: 20},
        {text: '30 mn',value: 30},
        {text: '40 mn',value: 40},
        {text: '50 mn',value: 50},
        {text: '1h',value: 60},
        {text: '1h10',value: 70},
        {text: '1h20',value: 80},
        {text: '1h30',value: 90}

      ],
      answer: null,
      h: null,
      mn: null,
      t: null,
      required: true,
      placeholder: 'Sélectionnez ici'
    },
    {
      id: 3,
      type: 'rating',
      text: 'Intensité ressentie',
      answer: '',
      subtitle: '0 : très facile - 10 : très difficle',
      min: 0,
      max: 10,
      precisionMin : '0',
      precisionMax : '10',
      step: 1,
      required: true
    },

    {
      id: 7,
      type: 'commentaire',
      answer: '',
      text: 'Commentaire',
      textType: 'text',
      required: false,
      placeholder: 'Entrez ici ...'
    },

  ];

  events: string[] = [];
  open = false;
  date;

  heure = [{text: '00', value: 0}];
  minute = [{text: '00', value: 0}];
  selected = [{h: '00', mn:'00'}];

  constructor(
    private pickerController: PickerController,
    private questionnaireService: SaveQuestionnaireService
  ) { }


  ngOnInit() {
  }

  openDate() {
    this.open = true;
    console.log(this.open);
  }

  closeDate() {
    this.open = false;
    console.log(this.open);
  }

  onValidate() {
    let result ={
      date: this.date,
      modalite: this.questions[0].answer,
      duree: this.questions[1].answer,
      intensite: this.questions[2].answer,
      commentaire: this.questions[3].answer
    };
    console.log(result);
    this.questionnaireService.validateActivity(result).subscribe(resData => 
      console.log(resData))
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    


    this.date = new Date(event.value).toLocaleDateString() + ' ' +  new Date(event.value).toLocaleTimeString();
  }

  async chooseTime(question) {
    console.log(question);
    let options: PickerOptions = {
      cssClass: 'picker',
      backdropDismiss: false,
      buttons: [
        // {
        //   text: 'Annuler',
        //   role: 'cancel'
        // },
        {
          text: 'Valider',
        }
      ],
      columns:[
        {
        name:'heure',
        selectedIndex: 0, // this.heure[0].value + 1,
        suffix: 'h',
        options: this.heure
      },  
      {
        name:'minute',
        selectedIndex: 0, // this.minute[0].value,
        suffix: 'mn',
        options: this.minute
      },
    ]
    };

    let picker = await this.pickerController.create(options);
    picker.columns[0].options.forEach(element => {
      delete element.selected;
      delete element.duration;
      delete element.transform;
    });

    // https://github.com/ionic-team/ionic-framework/issues/17664
    picker.present();
    picker.onDidDismiss().then(async data => {
      let heure = await picker.getColumn('heure');
      let minute = await picker.getColumn('minute');
      this.selected = [{
        h: heure.options[heure.selectedIndex].text,
        mn: minute.options[minute.selectedIndex].text
      }

      ];
      console.log(this.selected);
      this.questions[1].answer = parseInt(this.selected[0].h);
      this.heure[0].text = this.selected[0].h.toString();
      this.heure[0].value = parseInt(this.selected[0].h);
      this.questions[1].h = this.selected[0].h;
      this.minute[0].text = this.selected[0].mn.toString();
      this.minute[0].value = parseInt(this.selected[0].mn);
      this.questions[1].h = this.selected[0].h;
      this.questions[1].mn = this.selected[0].mn;
      this.questions[1].t = parseInt(this.selected[0].h) * 3600 + parseInt(this.selected[0].mn) * 60;
    })

  }

}
