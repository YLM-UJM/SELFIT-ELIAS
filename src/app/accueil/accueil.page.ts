import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Color, Label } from 'ng2-charts';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  @ViewChild('slider', { static: true }) slidefromHtml: IonSlides;

  currentDate = new Date();
  newDate = new Date()
  dates = [];
  full_calendar;
  dateSelected: string;
  date: Object;
  indiceToday:number;

  currentIndex:Number = 2;
  display = false;
  today = true;

  englishDay = ['Mon','Tue','Wed','Tue','Fri','Sat','Sun'];
  frenchDay = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  frenchMonth = ['Janvier', 'Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

  // GAUGE 
  gaugeType = "full";
  gaugeValue = '100';
  gaugeLabel = "";
  gaugeAppendText = "";
  foregroundColor = 'rgb(106, 124, 117)';

  // BAR CHART 

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
      gridLines: {
        display: false,
        drawBorder: true
      },
      display: true,
    }], yAxes: [{
      ticks: {
        min:0,
        max:200,
        stepSize: 50
      },
      display: false,
      gridLines: {
        display:false,
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['S-4', 'S-3', 'S-2', 'S-1', 'en cours'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [155, 160, 145, 140, 100], label: '' },
    // { data: [150, 150, 150, 150, 150], label: '', type: 'line',pointRadius:0, datalabels: {display:false} },
  ];

 
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: [
        '#ffa500',
        '#ffa500',
        '#ffa500',
        '#ffa500',
        'rgba(189,147,25,0.5)',
      ],
    },
    { // grey
      backgroundColor: 'rgba(100,100,100,0)',
      borderColor: 'rgba(255, 129, 56,1)',
    },
    // { // grey
    //   backgroundColor: 'rgba(255, 129, 56,0)',
    //   borderColor: 'rgba(255, 129, 56,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];

  server;
  acti = false;
  activity;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {

    this.server = this.authService.server;

    this.http.get(this.server + 'createArrayDate.php').subscribe(resData => {
      console.log(resData);
      this.full_calendar = resData['data'];
      this.acti = true;
      this.activity = resData['today'];
      this.dateSelected = resData['dateSelected'];
      console.log(this.dateSelected);
    })

    // //this.slidefromHtml.slideTo(3);
    // console.log(new Date().toString().substring(0,10))

    // this.MethodHere();
    // //create an array of date between an initial date and a final date
    // let initialTime = new Date("2020-10-12Z08:00:00");
    // let endTime     = new Date("2020-12-31Z08:00:00");

    // for (let q = initialTime; q <= endTime; q.setDate(q.getDate() + 1)) {
    //   this.dates.push(q.toString());
    // }
    // console.log(this.dates);

    // console.log(new Date(this.dates[0]).getUTCDay());

    // // make a loop for each date, and regroup them by 7 for a week 
    // let week = 0;
    // for (let i = 0; i<this.dates.length;i++) {
    //   if (i % 7 == 0 && i !== 0) {
    //     week += 1;
    //   }
    //   if (new Date().toString().substring(0,10) == new Date(this.dates[i]).toString().substring(0,10)) {
    //     this.indiceToday = i;
    //     console.log(this.indiceToday)
    //   }
    //   if (this.full_calendar[week]) {
    //     this.full_calendar[week].push({
    //       dateEN: this.dates[i],
    //       dateFR: this.convertFrench(this.dates[i]),
    //       monthEN: new Date(this.dates[i]).getMonth(),
    //       month: this.frenchMonth[ new Date(this.dates[i]).getMonth()],
    //       today: new Date().toString().substring(0,10) == new Date(this.dates[i]).toString().substring(0,10) ? true : false
    //     });
    //   } else {
    //     this.full_calendar[week] = [{
    //       dateEN: this.dates[i],
    //       dateFR: this.convertFrench(this.dates[i]),
    //       monthEN: new Date(this.dates[i]).getMonth(),
    //       month: this.frenchMonth[ new Date(this.dates[i]).getMonth()],
    //       today: new Date().toString().substring(0,10) == new Date(this.dates[i]).toString().substring(0,10) ? true : false

    //     }];
    //   }
    // }
    // console.log(this.full_calendar)
    // this.display = true;  

  }

  addActivity() {
    this.router.navigate(['./menu/activite-perso']);
  }

  convertFrench(date: string) {
    
    return this.frenchDay[new Date(date).getUTCDay()] + ' ' +  date.toString().substring(4,65)
  }

  selectedDate(data: Object) {
    console.log(data);
    // this.today = false;
    this.dateSelected = data['dateEN'];
    // console.log(data);
    this.acti = true;
    this.activity = data;
  }

  MethodHere() {
    this.slidefromHtml.getActiveIndex().then(id => {
         console.log('your index', id)
         this.currentIndex = id;
         this.display = true;
      })
  }

}
