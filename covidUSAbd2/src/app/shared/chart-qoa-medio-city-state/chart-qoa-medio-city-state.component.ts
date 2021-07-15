import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

interface ExtendedPoint extends Highcharts.Point {
  dataLabel;
  graphic;
}

@Component({
  selector: 'app-chart-qoa-medio-city-state',
  templateUrl: './chart-qoa-medio-city-state.component.html',
  styleUrls: ['./chart-qoa-medio-city-state.component.css']
})
export class ChartQoaMedioCityStateComponent implements OnChanges  {

  @Input() answer;

  @Input() projMap;

  chartOptions= {};

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  constructor() { }

  ngOnChanges(simpleChanges : SimpleChanges){

    this.chartOptions = {

      chart: {
        type: 'column',
        backgroundColor : '#2e2d2d8a',
    },
    title: {
        text: 'Media QoA per le città dei vari stati',
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
          text: 'Città',
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
            text: 'Valore medio QoA',
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
            data: this.answer?.data
        }
    ]

    }

  Highcharts.chart('container',this.chartOptions)

}

}
