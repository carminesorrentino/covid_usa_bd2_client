import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-covid',
  templateUrl: './chart-covid.component.html',
  styleUrls: ['./chart-covid.component.css']
})
export class ChartCovidComponent implements OnInit, OnChanges {

  @Input() answer;

  @Input() projMap;

  chartOptions={}  //proprietà del chart

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){

    var categories= this.answer.qf_categories;
    var morti=this.answer.qf_deaths;
    var casi= this.answer.qf_cases;;
    console.log(this.answer)
    

    console.log("categorie",categories)

    

    this.chartOptions={
        
        title: {
            text: 'Report casi e morti Covid-19 in '+this?.answer?.result[0]?.state,
            style: {
                color: 'white'
            }
        },
        
        chart: {
            backgroundColor : '#2e2d2d8a',
            zoomType: 'x'
        },

        subtitle: {
            text: 'Il seguente chart mostra l\'andamento della diffusione del Covid-19 nello stato '+this?.answer?.result[0]?.state,
            style: {
                color: 'white'
            }
        },

        yAxis: {
        title: {
            text: 'Numero di casi e di morti',
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
            text: 'Range temporale',
            style: { color: 'white' }
        },
        accessibility: {
            rangeDescription: 'Range:'+ categories[0]+"to "+categories[categories.length-1]
        },
        categories: categories,
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
        name: 'Casi',
        data: casi,
        color : 'orange'
        }, {
        name: 'Morti',
        data: morti,
        color : 'red'
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
