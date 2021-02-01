import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sf12',
  templateUrl: './sf12.page.html',
  styleUrls: ['./sf12.page.scss'],
})
export class Sf12Page implements OnInit {

  json = {
    locale: "fr",
    pages: [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "title": "Dans l’ensemble, pensez-vous que votre santé est (cochez ce que vous ressentez) :",
        "name": "Question 1" ,
        "isRequired": true,
        "choices": [
         {
          "value": "5",
          "text": "Excellente"
         },
         {
          "value": "4.4",
          "text": "Très bonne"
         },
         {
          "value": "3.4",
          "text": "Bonne"
         },
         {
          "value": "2",
          "text": "Médiocre"
         },
         {
          "value": "1",
          "text": "Mauvaise"
         }
        ]
       },
       {
        "type": "matrix",
        "title": "En raison de votre état de santé actuel, êtes-vous limité pour :",
        "name": "question 2",
        "isRequired": true,
        "columns": [
         {
          "value": "1",
          "text": "Oui, beaucoup limité"
         },
         {
          "value": "2",
          "text": "Oui, un peu limité"
         },
         {
          "value": "3",
          "text": "Non, pas du tout limité"
         }
        ],
        "rows": [
         {
          "value": "a",
          "text": "des efforts physiques modérés (déplacer une table, passer l’aspirateur, jouer aux boules...) ?"
         },
         {
          "value": "b",
          "text": "monter plusieurs étages par l’escalier ?"
         }
        ]
       },
       {
        "type": "matrix",
        "title": "Au cours de ces 4 dernières semaines, et en raison de votre état physique :",
        "name" : "Question 3",
        "isRequired": true,
        "columns": [
         {
          "value": "1",
          "text": "toujours"
         },
         {
          "value": "2",
          "text": "la plupart du temps"
         },
         {
          "value": "3",
          "text": "souvent"
         },
         {
          "value": "4",
          "text": "parfois"
         },
         {
          "value": "5",
          "text": "jamais"
         }
        ],
        "rows": [
         {
          "value": "a",
          "text": "Avez-vous accompli moins de chose que vous auriez souhaité ?"
         },
         {
          "value": "b",
          "text": "Avez-vous été limité pour faire certaines choses ?"
         }
        ]
       },
       {
        "type": "matrix",
        "title": "Au cours de ces 4 dernières semaines, et en raison de votre état émotionnel (comme vous sentir triste, nerveux ou déprimé) :",
        "name": "Question 4",
        "isRequired": true,
        "columns": [
         {
          "value": "1",
          "text": "toujours"
         },
         {
          "value": "2",
          "text": "la plupart du temps"
         },
         {
          "value": "3",
          "text": "souvent"
         },
         {
          "value": "4",
          "text": "parfois"
         },
         {
          "value": "5",
          "text": "jamais"
         }
        ],
        "rows": [
         {
          "value": "a",
          "text": "Avez-vous accompli moins de choses que vous auriez souhaité?"
         },
         {
          "value": "b",
          "text": "Avez-vous eu des difficultés à faire ce que vous aviez à faire avec autant de soin et d’attention que d’habitude ?"
         }
        ]
       },
       {
        "type": "checkbox",
        "title": "Au cours de ces 4 dernières semaines, dans quelle mesure vos douleurs physiques vous ont-elles limité dans votre travail ou vos activités domestiques ?",
        "name": "Question 5" ,
        "isRequired": true,
        "choices": [
         {
          "value": "5",
          "text": "Pas du tout"
         },
         {
          "value": "4",
          "text": "Un petit peu"
         },
         {
          "value": "3",
          "text": "Moyennement"
         },
         {
          "value": "2",
          "text": "Assez fortement"
         },
         {
          "value": "1",
          "text": "Très fortement"
         }
        ]
       },
       {
        "type": "matrix",
        "title": "Les questions suivantes portent sur comment vous vous êtes senti au cours de ces 4 dernières semaines. Pour chaque question, indiquez la réponse qui vous semble la plus appropriée.",
        "name": "Question 6",
        "isRequired": true,
        "columns": [
         {
          "value": "5",
          "text": "toujours"
         },
         {
          "value": "4",
          "text": "la plupart du temps"
         },
         {
          "value": "3",
          "text": "souvent"
         },
         {
          "value": "2",
          "text": "parfois"
         },
         {
          "value": "1",
          "text": "jamais"
         }
        ],
        "rows": [
         {
          "value": "a",
          "text": "Y a-t-il eu des moments où vous vous êtes senti calme et détendu ?"
         },
         {
          "value": "b",
          "text": "Y a-t-il eu des moments où vous vous êtes senti débordant(e) d’énergie ?"
         },
         {
           "value": "c",
           "text" : "Y a-t-il eu des moments où vous vous êtes senti triste et abattu ?"
         }
        ]
       },
       {
        "type": "matrix",
        "title": "La question suivante porte sur comment vous vous êtes senti au cours de ces 4 dernières semaines. Indiquez la réponse qui vous semble la plus appropriée.",
        "name": "Question 7",
        "isRequired": true,
        "columns": [
         {
          "value": "1",
          "text": "toujours"
         },
         {
          "value": "2",
          "text": "la plupart du temps"
         },
         {
          "value": "3",
          "text": "souvent"
         },
         {
          "value": "4",
          "text": "parfois"
         },
         {
          "value": "5",
          "text": "jamais"
         }
        ],
        "rows": [

         {
           "value": "c",
           "text" : "Y a-t-il eu des moments où vous vous êtes senti triste et abattu ?"
         }
        ]
       },
       {
        "type": "checkbox",
        "title": "Au cours de ces 4 dernières semaines, y a-t-il eu des moments où votre état de santé physique ou émotionnel vous a gêné dans votre vie sociale et vos relations avec les autres, votre famille, vos amis, vos connaissances ?",
        "name": "Question 8" ,
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": "Toujours"
         },
         {
          "value": "2",
          "text": "La plupart du temps"
         },
         {
          "value": "3",
          "text": "Souvent"
         },
         {
          "value": "4",
          "text": "Parfois"
         },
         {
          "value": "5",
          "text": "Jamais"
         }
        ]
       },
      ]
     }
    ]
   };

  constructor() { }

  ngOnInit() {
  }

  sendData(result) {}

}
