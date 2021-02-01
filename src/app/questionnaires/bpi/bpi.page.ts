import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bpi',
  templateUrl: './bpi.page.html',
  styleUrls: ['./bpi.page.scss'],
})
export class BpiPage implements OnInit {

  json = {
    locale: "fr",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Au  cours  de  notre  vie, la  plupart d’entre  nous\t\n  ressentent\t\n  des\t\n  douleurs\t\n  un\t\n  jour\t\n  ou\t\n  l’autre\t\n  (maux\t\n  \nde\t\n  tête,\t\n  rage\t\n  de\t\n  dents)\t\n  :\t\n  au\t\n  cours\t\n  des\t\n  huit\t\n  derniers\t\n  jours\t\n  avez‐vous\t\n  ressenti\t\n  d’autres\t\n  douleurs\t\n  que\t\n  \nce\t\n  type\t\n  de\t\n  douleurs\t\n  «\t\n  familières\t\n  »\t\n  ?\t\n ",
        "isRequired": true,
        "choices": [
         "OUI",
         "NON"
        ]
       },
       {
        "type": "comment",
        "name": "question2",
        "visibleIf": "{question1} = 'OUI'",
        "title": " Décrivez où se trouve votre douleur et précisez s’il s’agit d’une douleur près de la surface de votre corps ou une douleur plus profonde dans le    corps. Si vous avez plusieurs douleurs, décrivez l’endroit où vous ressentez la douleur la plus intense. "
       },
       {
        "type": "rating",
        "name": "question3",
        "visibleIf": "{question1} = 'OUI'",
        "title": "SVP,\t\n  sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  la\t\n  douleur\t\n  la\t\n  plus\t\n   intense\t\n   que\t\n  vous\t\n  \navez\t\n  ressentie\t\n  la\t\n  semaine\t\n  dernière.",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Pas\t   de\t   douleur\t   ",
        "maxRateDescription": "Douleur\t   la\t   +\t   horrible\t    que\t   vous\t   puissiez\t   imaginer\t"
       },
       {
        "type": "rating",
        "name": "question4",
        "visibleIf": "{question1} = 'OUI'",
        "title": "SVP,\t\n  sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  la\t\n  douleur\t\n  la\t\n  plus\t\n   faible\t\n   que\t\n  vous\t\n  \navez\t\n  ressentie\t\n  la\t\n  semaine\t\n  dernière.\t\n ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Pas\t   de\t   douleur\t   ",
        "maxRateDescription": "Douleur\t   la\t   +\t   horrible\t    que\t   vous\t   puissiez\t   imaginer\t  "
       },
       {
        "type": "rating",
        "name": "question5",
        "visibleIf": "{question1} = 'OUI'",
        "title": "  SVP,\t\n  sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  votre\t\n  douleur\t\n   en\t\n  général.\t\n  ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Pas\t   de\t   douleur\t   ",
        "maxRateDescription": "Douleur\t   la\t   +\t   horrible\t    que\t   vous\t   puissiez\t   imaginer\t   "
       },
       {
        "type": "rating",
        "name": "question6",
        "visibleIf": "{question1} = 'OUI'",
        "title": "SVP,\t\n  sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  votre\t\n  douleur\t\n   en\t\n  ce\t\n  moment.\t\n  ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "\t    Pas\t   de\t   douleur\t   ",
        "maxRateDescription": "Douleur\t   la\t   +\t   horrible\t    que\t   vous\t   puissiez\t   imaginer"
       },
       {
        "type": "comment",
        "name": "question7",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Quels\t\n  traitements\t\n  suivez‐vous\t\n  ou\t\n  quels\t\n  médicaments\t\n  prenez‐vous\t\n  contre\t\n  la\t\n  douleur\t\n  ?\t\n  ",
        "isRequired": true
       },
       {
        "type": "rating",
        "name": "question8",
        "visibleIf": "{question1} = 'OUI'",
        "title": "La semaine dernière, quel soulagement les traitements ou les médicaments que vous prenez vous ont-ils apporté : pouvez-vous indiquer le pourcentage d’amélioration obtenue ?",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Aucune amélioration",
        "maxRateDescription": "Amélioration	complète"
       },
       {
        "type": "rating",
        "name": "question9",
        "visibleIf": "{question1} = 'OUI'",
        "title": " Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n  activité générale : ",
        // "description": "Activité\t\n  générale\t\n ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question10",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n humeur : ",
        // "description": "Humeur",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question11",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n capacité à marcher :",
        // "description": "Capacité à marcher",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question12",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n travail habituel (y compris à l’extérieur de la maison et les travaux domestiques) :",
        // "description": "\t\n  Travail\t\n  habituel\t\n  (y\t\n  compris\t\n  à\t\n  l’extérieur\t\n  de\t\n  la\t\n  maison\t\n  et\t\n  les\t\n  travaux\t\n  domestiques)\t\n \n  ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question13",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n relation avec les autres :",
        // "description": "Relations\t\n  avec\t\n  les\t\n  autres\t\n",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question14",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n sommeil :",
        // "description": "Sommeil\t\n  ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       },
       {
        "type": "rating",
        "name": "question15",
        "visibleIf": "{question1} = 'OUI'",
        "title": "Sélectionnez\t\n  le\t\n  chiffre\t\n  qui\t\n  décrit\t\n  le\t\n  mieux\t\n  comment,\t\n  la\t\n  semaine\t\n  dernière,\t\n  la\t\n  douleur\t\n  a\t\n  gêné\t\n  \nvotre\t\n goût de vivre :",
        // "description": "Goût\t\n  de\t\n  vivre\n  ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Ne\t   gêne\t   pas\t   ",
        "maxRateDescription": "Gêne\t   complètement\t"
       }
      ]
     }
    ]
   };

  constructor() { }

  ngOnInit() {
  }

  sendData(result) {}

}
