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
        
        title: {
            text: 'Report QoA in '+this?.answer?.result[0].cities_air_quality.city,
            style: {
                color: 'white'
            }
        },
        
        chart: {
            backgroundColor : '#2e2d2d8a',
            zoomType: 'x'
        },

        subtitle: {
            text: 'Il seguente chart mostra l\'andamento della QoA della città di '+this?.answer?.result[0].cities_air_quality.city,
            style: {
                color: 'white'
            }
        },

        yAxis: {
        title: {
            text: 'Qualità dell\'aria',
            style: { color: 'white' }
        },
        labels: {
            style: {
                color: 'white'
            }
        }  
        },

        xAxis: {
        title: {
            text: 'Data',
            style: { color: 'white' }
        },
        accessibility: {
            rangeDescription: 'Range:'+ this.answer.qf_categories[0]+"to "+this.answer.qf_categories[this.answer.qf_categories.length-1]
        },
        categories: this.answer.qf_categories,
        labels: {
            style: {
                color: 'white'
            }
        }
        },

        legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
            color: 'darkgray'
        },
        itemHoverStyle: {
            color: 'white'
        }
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                //pointStart: 2018
            }
        },

        series: [{
        name: 'Qualità dell\'aria',
        data: this.answer.qf_air_quality,
        color : 'green'
        }],

        responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
        }
    }
    

    Highcharts.chart('container',this.chartOptions)


  }


}
