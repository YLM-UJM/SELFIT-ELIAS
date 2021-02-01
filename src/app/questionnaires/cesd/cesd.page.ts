import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesd',
  templateUrl: './cesd.page.html',
  styleUrls: ['./cesd.page.scss'],
})
export class CesdPage implements OnInit {

  json = {
    locale: "fr",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "J'ai été contrarié(e) par des choses qui d'habitude ne me dérangent pas",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Je n'ai pas eu envie de manger, j'ai manqué d'appétit",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "J'ai eu l'impression que je ne pouvais pas sortir du cafard, même avec l'aide de ma famille et de mes amis",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "J'ai eu le sentiment d'être aussi bien que les autres",
        "isRequired": true,
        "choices": [
         {
          "value": "3",
          "text": "Jamais"
         },
         {
          "value": "3",
          "text": "Très rarement"
         },
         {
          "value": "2",
          "text": "Occasionnellement"
         },
         {
          "value": "1",
          "text": "Assez souvent"
         },
         {
          "value": "0",
          "text": "Fréquemment"
         },
         {
          "value": "0",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "J'ai eu du mal à me concentrer sur ce que je faisais",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": "Je me suis senti(e) déprimé(e)",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "J'ai eu l'impression que toute action me demandait un effort",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "J'ai été confiant(e) en l'avenir",
        "isRequired": true,
        "choices": [
          {
            "value": "3",
            "text": "Jamais"
           },
           {
            "value": "3",
            "text": "Très rarement"
           },
           {
            "value": "2",
            "text": "Occasionnellement"
           },
           {
            "value": "1",
            "text": "Assez souvent"
           },
           {
            "value": "0",
            "text": "Fréquemment"
           },
           {
            "value": "0",
            "text": "En permanence"
           }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "J'ai pensé que ma vie était un échec",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "Je me suis senti(e) craintif(ve)",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "Mon sommeil n'a pas été bon",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "J'ai été heureux(se)",
        "isRequired": true,
        "choices": [
          {
            "value": "3",
            "text": "Jamais"
           },
           {
            "value": "3",
            "text": "Très rarement"
           },
           {
            "value": "2",
            "text": "Occasionnellement"
           },
           {
            "value": "1",
            "text": "Assez souvent"
           },
           {
            "value": "0",
            "text": "Fréquemment"
           },
           {
            "value": "0",
            "text": "En permanence"
           }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question13",
        "title": "J'ai parlé moins que d'habitude",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question14",
        "title": "Je me suis senti(e) seul(e)",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question15",
        "title": "Les autres ont été hostiles envers moi",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question16",
        "title": "J'ai profité de la vie",
        "isRequired": true,
        "choices": [
          {
            "value": "3",
            "text": "Jamais"
           },
           {
            "value": "3",
            "text": "Très rarement"
           },
           {
            "value": "2",
            "text": "Occasionnellement"
           },
           {
            "value": "1",
            "text": "Assez souvent"
           },
           {
            "value": "0",
            "text": "Fréquemment"
           },
           {
            "value": "0",
            "text": "En permanence"
           }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question17",
        "title": "J'ai eu des crises de larmes",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question18",
        "title": "Je me suis senti(e) triste",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question19",
        "title": "J'ai eu l'impression que les gens ne m'aimaient pas",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question20",
        "title": "J'ai manqué d'entrain",
        "isRequired": true,
        "choices": [
         {
          "value": "0",
          "text": "Jamais"
         },
         {
          "value": "0",
          "text": "Très rarement"
         },
         {
          "value": "1",
          "text": "Occasionnellement"
         },
         {
          "value": "2",
          "text": "Assez souvent"
         },
         {
          "value": "3",
          "text": "Fréquemment"
         },
         {
          "value": "3",
          "text": "En permanence"
         }
        ]
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
