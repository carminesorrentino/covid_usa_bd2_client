import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-qoa-state',
  templateUrl: './chart-qoa-state.component.html',
  styleUrls: ['./chart-qoa-state.component.css']
})
export class ChartQoaStateComponent implements OnChanges {

  @Input() answer;

  @Input() projMap;

  chartOptions= {};

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  constructor(){}

  ngOnChanges(simpleChanges : SimpleChanges){
/* PIE CHART 
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
          return {
              radialGradient: {
                  cx: 0.5,
                  cy: 0.3,
                  r: 0.7
              },
              stops: [
                  [0, color],
                  [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
              ]
          };
      })
    });

    this.chartOptions = {

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor : '#2e2d2d8a',
        height: 500
      },
      title: {
        text: 'Browser market shares in January, 2018',
        style: {
          color: 'white'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.1f}</b>'
      },
      accessibility: {
        point: {
            valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y:.1f}',
                style: {
                  color: 'white'
                }
            }
        }
      },
      series: [{
        name: 'Brands',
        color: 'white',
        colorByPoint: true,
        data: this.answer?.data
      }]
    }*/

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
          text: 'Città dello stato: '+this?.answer?.result[0]?.state,
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
            data: this.answer?.data
        }
    ]

    }
    

    Highcharts.chart('container',this.chartOptions)


  }

}
