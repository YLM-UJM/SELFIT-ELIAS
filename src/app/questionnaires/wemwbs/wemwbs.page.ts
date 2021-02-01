import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SaveQuestionnaireService } from 'src/app/service/save-questionnaire.service';

@Component({
  selector: 'app-wemwbs',
  templateUrl: './wemwbs.page.html',
  styleUrls: ['./wemwbs.page.scss'],
})
export class WemwbsPage implements OnInit {

  server;

  json = {
    locale: "fr",
    title: "Les informations ci-dessous concernent vos sensations et vos pensées. Cochez la case qui correspond le mieux à votre vécu durant les deux dernières semaines.",
    // showProgressBar: "top",
    pages: [
      // 1ère page 
      {
        elements: [

          {
            type: "matrix",
            name: "partie1",
            "titleLocation": "hidden",
            "isRequired": false,
            // title:
            //   // "Autres sujets d'inquiétude",
            //   "",
            columns: [
              {
                value: 1,
                text: "Jamais"
              },
              {
                value: 2,
                text: "Rarement"
              },
              {
                value: 3,
                text: "Parfois"
              },
              {
                value: 5,
                text: "Souvent"
              },
              {
                value: 5,
                text: "Tout le temps"
              }
            ],
            rows: [
              {
                value: "a",
                text: "Je me suis senti(e) optimiste face à l'avenir"
              },
              {
                value: "b",
                text: "Je me suis senti(e) utile"
              },
              {
                value: "c",
                text: "Je me suis senti(e) détendu(e)"
              },
              {
                value: "d",
                text: "Je me suis senti(e) intéressé(s) par les autres"
              },
              {
                value: "e",
                text: "J'ai eu de l'énergie à dépenser"
              },
              {
                value: "f",
                text: "J'ai bien résolu les problèmes auxquels j'ai été confronté"
              },
              {
                value: "g",
                text: "Ma pensée était claire"
              },
              {
                value: "h",
                text: "J'ai eu une bonne image de moi"
              },
              {
                value: "i",
                text: "Je me suis senti(e) proche des autres"
              },
              {
                value: "j",
                text: "Je me suis senti(e) confiant(e) "
              },
              {
                value: "k",
                text: "J'ai été capable de prendre mes propres décisions"
              },
              {
                value: "l",
                text: "Je me suis senti(e) aimé(e)"
              },
              {
                value: "m",
                text: "Je me suis senti(e) intéressé(e) par de nouvelles choses"
              },
              {
                value: "n",
                text: "Je me suis senti(e) joyeux(se)"
              }
            ],
            "isAllRowRequired": false
          },
        ]
      },
    ]
  };

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private questionnaireService: SaveQuestionnaireService
  ) {
    this.server = this.authService.server;
   }

  ngOnInit() {
  }

  sendData(result) {

    // console.log(result);
    // this.authService.userId.subscribe(userId => {
    //   console.log(userId);
    //   let user_id = {user_id: userId}
    //   Object.assign(result.partie1,user_id)
    //   this.http.post(this.server + 'saveQuestionnaire.php',result.partie1).subscribe(resData => {
    //     console.log(resData);
    //   })
    // })
    this.questionnaireService.saveQuestionnaire(result.partie1,'WEMWBS').subscribe(resData => {
      console.log(resData);
    })
  }

}
