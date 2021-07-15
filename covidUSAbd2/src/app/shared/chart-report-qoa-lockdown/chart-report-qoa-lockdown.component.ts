import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-report-qoa-lockdown',
  templateUrl: './chart-report-qoa-lockdown.component.html',
  styleUrls: ['./chart-report-qoa-lockdown.component.css']
})
export class ChartReportQoaLockdownComponent implements OnInit, OnChanges {

  @Input() answer;
  @Input() projMap;
  @Input() dataLockdown;

  chartOptions= {};

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  constructor(){}

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){

    let puntoRiga : number = 0;

    let i : number = 0;

    this?.answer?.qf_categories.forEach(element => {
      if (element==this?.dataLockdown){
          puntoRiga=i;
      }
      console.log(i)
      i=i+1
    });

    this.chartOptions = {

      chart: {
        type: 'column',
        backgroundColor : '#2e2d2d8a',
    },
    title: {
        text: 'Report qualità dell\'aria della contea '+this?.answer?.result[0]?.county+' dello stato '+this?.answer?.result[0]?.state,
        style: {
          color: 'white'
      }
    },
    subtitle: {
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        categories: this?.answer?.qf_categories,
        type: 'category',
        title: {
          text: 'Data',
          style: { color: 'white' }
      },
      labels: {
        style: {
            color: 'white'
        }
      },
      plotLines: [{
        value: puntoRiga,
        dashStyle: 'dash',
        width: 3,
        color: 'red'
      }],
    },
    yAxis: {
        title: {
            text: 'Valore qualità dell\'aria',
            style: { color: 'white' }
        },
        labels: {
          style: {
              color: 'white'
          }
      } 
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.2f}',
                style: {
                  color: 'white'
              }
            }
        }
    },

 

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
    },

 

    series: [
        {
            name: "Qualità dell\'aria",
            colorByPoint: true,
            data: this.answer?.qf_air_quality
        }
    ]

    }
    

    Highcharts.chart('container',this.chartOptions)


  }

}
