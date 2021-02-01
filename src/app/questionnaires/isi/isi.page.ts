import { Component, OnInit } from '@angular/core';
import { SaveQuestionnaireService } from 'src/app/service/save-questionnaire.service';

@Component({
  selector: 'app-isi',
  templateUrl: './isi.page.html',
  styleUrls: ['./isi.page.scss'],
})
export class IsiPage implements OnInit {

  required = false;

  json = {
    locale: "fr",
    // showProgressBar: "top",
    pages: [
      // 1ère page 
      {
        elements: [
          // question 1
          // question 2
          {
            type: "matrix",
            name: "q1",
            "isRequired": this.required,
            title:
              "Veuillez estimer la SÉVÉRITÉ actuelle (dernier mois) de vos difficultés de sommeil  :",
            columns: [
              {
                value: 0,
                text: "Aucune"
              },
              {
                value: 1,
                text: "Légère"
              },
              {
                value: 2,
                text: "Modérée"
              },
              {
                value: 3,
                text: "Sévère"
              },
              {
                value: 4,
                text: "Très sévère"
              }
            ],
            rows: [
              {
                value: "q1a",
                text: "Difficulté à s’endormir"
              },
              {
                value: "q1b",
                text: "Difficulté à rester endormi(e)"
              },
              {
                value: "q1c",
                text: "Problème de réveils trop tôt le matin "
              }
            ]
          },

          // question 2
          
          {
            type: "radiogroup",
            title: "Jusqu’à quel point êtes-vous SATISFAIT(E)/INSATISFAIT(E) de votre sommeil actuel ?",
            name: "q2",
            "isRequired": this.required,
            renderAs: "prettycheckbox",
            choices: [
              {
                "value": "0",
                "text": "Très satisfait"
               },
               {
                "value": "1",
                "text": "Satisfait"
               },
               {
                "value": "2",
                "text": "Modérément satisfait"
               },
               {
                "value": "3",
                "text": "Insatisfait"
               },
               {
                "value": "4",
                "text": "Très insatisfait"
               }
                    ]
          },
          {
            type: "radiogroup",
            title: "Jusqu’à quel point considérez-vous que vos difficultés de sommeil PERTURBENT votre fonctionnement quotidien (par exemple : fatigue, concentration, mémoire, humeur) ?",
            name: "q3",
            "isRequired": this.required,
            renderAs: "prettycheckbox",
            choices: [
              {
                "value": "0",
                "text": "Pas du tout"
               },
               {
                "value": "1",
                "text": "Un peu"
               },
               {
                "value": "2",
                "text": "Moyennement"
               },
               {
                "value": "3",
                "text": "Beaucoup"
               },
               {
                "value": "4",
                "text": "Enormément"
               }
                    ]
          },
          {
            type: "radiogroup",
            title: "A quel point considérez-vous que vos difficultés de sommeil sont APPARENTES pour les autres en termes de détérioration de votre qualité de vie ?",
            name: "q4",
            "isRequired": this.required,
            renderAs: "prettycheckbox",
            choices: [
              {
                "value": "0",
                "text": "Pas du tout"
               },
               {
                "value": "1",
                "text": "Un peu"
               },
               {
                "value": "2",
                "text": "Moyennement"
               },
               {
                "value": "3",
                "text": "Beaucoup"
               },
               {
                "value": "4",
                "text": "Enormément"
               }
                    ]
          },
          {
            type: "radiogroup",
            title: "Jusqu’à quel point êtes-vous INQUIET(ÈTE)/préoccupé(e) à propos de vos difficultés de sommeil ?",
            name: "q5",
            "isRequired": this.required,
            renderAs: "prettycheckbox",
            choices: [
              {
                "value": "0",
                "text": "Pas du tout"
               },
               {
                "value": "1",
                "text": "Un peu"
               },
               {
                "value": "2",
                "text": "Moyennement"
               },
               {
                "value": "3",
                "text": "Beaucoup"
               },
               {
                "value": "4",
                "text": "Enormément"
               }
                    ]
          },
        ]
      },
    ]
  };

  constructor(
    private questionnaireService: SaveQuestionnaireService
  ) { }

  ngOnInit() {
  }

  sendData(result) {
    console.log(result);
    result.q1a = result.q1.q1a;
    result.q1b = result.q1.q1b;
    result.q1c = result.q1.q1c;
    delete result.q1;
    console.log(result)
    this.questionnaireService.saveQuestionnaire(result,'ISI').subscribe(resData => {
      console.log(resData);
    })
  }


}
