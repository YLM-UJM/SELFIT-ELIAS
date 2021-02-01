import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {

    // // Radar
    // public radarChartOptions: RadialChartOptions = {
    //   responsive: true,
    // };
    // public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  
    // public radarChartData: ChartDataSets[] = [
    //   { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    //   { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    // ];
    // public radarChartType: ChartType = 'radar';

    // Radar
    public radarChartOptions: RadialChartOptions = {
      responsive: true,
      
      scale: {
        ticks: {
            max: 100,
            min: 0,
            stepSize:50
        },
        pointLabels: {
          fontStyle: 'Bold'
        }
        
        
      },

    };
    //public radarChartLabels: Label[] = ['Endurance', 'Endurance de force', 'Equilibre', 'Souplesse', 'Chaine abdominale', 'Puissance', 'Force bas du corps', 'Prehension','Puissance'];
  
    public radarChartLabels: Label[] = ['Endurance', 'Equilibre', 'Force'];


    public radarChartData: ChartDataSets[] = [
      { data: [80, 90, 40], label: '' },
    ];
    public radarChartType: ChartType = 'radar';

    public lineChartColors: Color[] = [
      { // grey
        backgroundColor: 'rgba(255,165,0,0.5)',
      }
    ];


  constructor() { }

  ngOnInit() {
  }

}
