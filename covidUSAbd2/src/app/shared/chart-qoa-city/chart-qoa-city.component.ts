import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-qoa-city',
  templateUrl: './chart-qoa-city.component.html',
  styleUrls: ['./chart-qoa-city.component.css']
})
export class ChartQoaCityComponent implements OnInit, OnChanges {

  @Input() answer;

  @Input() projMap;

  chartOptions= {};

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){

    this.chartOptions = {

      chart: {
        type: 'column',
        backgroundColor : '#2e2d2d8a',
    },
    title: {
        text: 'Report qualità dell\'aria delle città dello stato: '+this?.answer?.result[0]?.state,
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
        type: 'category',
        title: {
          text: 'Date',
          style: { color: 'white' }
      },
      labels: {
        style: {
            color: 'white'
        }
    } 
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
