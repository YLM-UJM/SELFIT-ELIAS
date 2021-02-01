import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facit',
  templateUrl: './facit.page.html',
  styleUrls: ['./facit.page.scss'],
})
export class FacitPage implements OnInit {

  json = {
    locale: "fr",
    // title: "Vous trouverez ci-dessous une liste de commentaires que d’autres personnes atteintes de la même maladie que vous ont jugés importants. Veuillez indiquer votre réponse en cochant un seul chiffre par ligne et en tenant compte des 7 derniers jours.",
    // showProgressBar: "top",
    pages: [
      // 1ère page 
      {
        elements: [
          // Partie 1
          // {
          //   type: "matrix",
          //   name: "partie1",
          //   isRequired: false,
          //   title:
          //     "Bien-être physique",
          //   columns: [
          //     {
          //       value: 0,
          //       text: "Pas du tout"
          //     },
          //     {
          //       value: 1,
          //       text: "Un peu"
          //     },
          //     {
          //       value: 2,
          //       text: "Moyennement"
          //     },
          //     {
          //       value: 3,
          //       text: "Beaucoup"
          //     },
          //     {
          //       value: 4,
          //       text: "Enormément"
          //     }
          //   ],
          //   rows: [
          //     {
          //       value: "GP1",
          //       text: "Je manque d'énergie :"
          //     },
          //     {
          //       value: "GP2",
          //       text: "J'ai des nausées : "
          //     },
          //     {
          //       value: "GP3",
          //       text: "À cause de mon état physique, j’ai du mal à répondre aux besoins de ma famille :"
          //     },
          //     {
          //       value: "GP4",
          //       text: "J’ai des douleurs : "
          //     },
          //     {
          //       value: "GP5",
          //       text: "Je suis incommodé(e) par les effets secondaires du traitement : "
          //     },
          //     {
          //       value: "GP6",
          //       text: "Je me sens malade :"
          //     },
          //     {
          //       value: "GP7",
          //       text: "Je suis obligé(e) de passer du temps allongé(e) : "
          //     }
          //   ]
          // },
          // //Partie 2
          // {
          //   type: "matrix",
          //   name: "partie2a",
          //   isRequired: false,
          //   title:
          //     "Bien-être familial-social",
          //   columns: [
          //     {
          //       value: 0,
          //       text: "Pas du tout"
          //     },
          //     {
          //       value: 1,
          //       text: "Un peu"
          //     },
          //     {
          //       value: 2,
          //       text: "Moyennement"
          //     },
          //     {
          //       value: 3,
          //       text: "Beaucoup"
          //     },
          //     {
          //       value: 4,
          //       text: "Enormément"
          //     }
          //   ],
          //   rows: [
          //     {
          //       value: "GS1",
          //       text: "Je me sens proche de mes amis :"
          //     },
          //     {
          //       value: "GS2",
          //       text: "Ma famille me soutient moralement : "
          //     },
          //     {
          //       value: "GS3",
          //       text: "Mes amis me soutiennent :"
          //     },
          //     {
          //       value: "GS4",
          //       text: "Ma famille a accepté ma maladie : "
          //     },
          //     {
          //       value: "GS5",
          //       text: "Je suis satisfait(e) de la communication avec ma famille au sujet de ma maladie : "
          //     },
          //     {
          //       value: "GS6",
          //       text: "Je me sens proche de mon (ma) partenaire (ou de la personne qui est mon principal soutien) :"
          //     }
          //   ]
          // },
          // {
          //   type: "matrix",
          //   name: "partie2b",
          //   isRequired: false,
          //   title:
          //     "Bien-être familial-social - suite",
          //   columns: [
          //     {
          //       value: 0,
          //       text: "Pas du tout"
          //     },
          //     {
          //       value: 1,
          //       text: "Un peu"
          //     },
          //     {
          //       value: 2,
          //       text: "Moyennement"
          //     },
          //     {
          //       value: 3,
          //       text: "Beaucoup"
          //     },
          //     {
          //       value: 4,
          //       text: "Enormément"
          //     },
          //     {
          //       value: 'Q1',
          //       text: "Ne souhaite pas répondre"
          //     }
          //   ],
          //   rows: [
          //     {
          //       value: "GS7",
          //       text: "Je suis satisfait(e) de ma vie sexuelle :"
          //     },
          //   ]
          // },
          // {
          //   type: "matrix",
          //   name: "partie3",
          //   isRequired: false,
          //   title:
          //     "Bien-être émotionnel",
          //   columns: [
          //     {
          //       value: 0,
          //       text: "Pas du tout"
          //     },
          //     {
          //       value: 1,
          //       text: "Un peu"
          //     },
          //     {
          //       value: 2,
          //       text: "Moyennement"
          //     },
          //     {
          //       value: 3,
          //       text: "Beaucoup"
          //     },
          //     {
          //       value: 4,
          //       text: "Enormément"
          //     }
          //   ],
          //   rows: [
          //     {
          //       value: "GE1",
          //       text: "Je me sens triste :"
          //     },
          //     {
          //       value: "GE2",
          //       text: "Je suis satisfait(e) de la façon dont je fais face à ma maladie : "
          //     },
          //     {
          //       value: "GE3",
          //       text: "Je perds espoir dans le combat contre ma maladie :"
          //     },
          //     {
          //       value: "GE4",
          //       text: "Je me sens nerveux (nerveuse) : "
          //     },
          //     {
          //       value: "GE5",
          //       text: "Je suis préoccupé(e) par l’idée de mourir : "
          //     },
          //     {
          //       value: "GE6",
          //       text: "Je  suis préoccupé(e) à l’idée que mon état de santé puisse s’aggraver :"
          //     }
          //   ]
          // },
          // {
          //   type: "matrix",
          //   name: "partie4",
          //   isRequired: false,
          //   title:
          //     "Bien-être fonctionnel",
          //   columns: [
          //     {
          //       value: 0,
          //       text: "Pas du tout"
          //     },
          //     {
          //       value: 1,
          //       text: "Un peu"
          //     },
          //     {
          //       value: 2,
          //       text: "Moyennement"
          //     },
          //     {
          //       value: 3,
          //       text: "Beaucoup"
          //     },
          //     {
          //       value: 4,
          //       text: "Enormément"
          //     }
          //   ],
          //   rows: [
          //     {
          //       value: "GF1",
          //       text: "Je suis capable de travailler (y compris le travail à la maison) :"
          //     },
          //     {
          //       value: "GF2",
          //       text: "Mon travail (y compris le travail à la maison) me donne de la satisfaction : "
          //     },
          //     {
          //       value: "GF3",
          //       text: "Je suis capable de profiter de la vie :"
          //     },
          //     {
          //       value: "GF4",
          //       text: "J’ai accepté ma maladie : "
          //     },
          //     {
          //       value: "GF5",
          //       text: "Je dors bien : "
          //     },
          //     {
          //       value: "GF6",
          //       text: "J’apprécie mes loisirs habituels :"
          //     },
          //     {
          //       value: "GF7",
          //       text: "Je suis satisfait(e) de ma qualité de vie actuelle :"
          //     }
          //   ]
          // },
          {
            type: "matrix",
            name: "partie5",
            "titleLocation": "hidden",
            "isRequired": true,
            // title:
            //   // "Autres sujets d'inquiétude",
            //   "",
            columns: [
              {
                value: 0,
                text: "Pas du tout"
              },
              {
                value: 1,
                text: "Un peu"
              },
              {
                value: 2,
                text: "Moyennement"
              },
              {
                value: 3,
                text: "Beaucoup"
              },
              {
                value: 4,
                text: "Enormément"
              }
            ],
            rows: [
              {
                value: "HI7",
                text: "Je me sens épuisé(e) :"
              },
              {
                value: "HI12",
                text: "Je ressens une faiblesse générale : "
              },
              {
                value: "An1",
                text: "Je suis sans énergie [lessivé(e)] :"
              },
              {
                value: "An2",
                text: "Je me sens fatigué(e) : "
              },
              {
                value: "An3",
                text: "J'ai du mal à commencer les choses parce que je suis fatigué(e) : "
              },
              {
                value: "An4",
                text: "J'ai du mal à terminer les choses parce que je suis fatigué(e) :"
              },
              {
                value: "An5",
                text: "J'ai de l'énergie :"
              },
              {
                value: "An7",
                text: "Je suis capable de faire ce que je fais d'habitude :"
              },
              {
                value: "An8",
                text: "J'ai besoin de dormir dans la journée : "
              },
              {
                value: "An12",
                text: "Je suis trop fatigué(e) pour manger : "
              },
              {
                value: "An14",
                text: "J’ai besoin d’aide pour faire mes activités habituelles :"
              },
              {
                value: "An15",
                text: "Je suis frustré(e) d'être trop fatigué(e) pour pouvoir faire ce que je veux :"
              },
              {
                value: "An16",
                text: "Je dois limiter mes activités sociales parce que je suis fatigué(e) :"
              }
            ],
            "isAllRowRequired": true
          },
        ]
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  sendData(result) {}

}
