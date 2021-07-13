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

  chartOptions={}

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){

    var categories= this.answer.qf_categories;
    var morti=this.answer.qf_deaths;
    var casi= this.answer.qf_cases;;
    console.log(this.answer)
    

    console.log("categorie",categories)

    
    this.chartOptions={title: {
      text: ''
  },

  subtitle: {
      text: ''
  },

  yAxis: {
      title: {
          text: 'Numero di casi e di morti'
      }
      
  },

  xAxis: {
      accessibility: {
          rangeDescription: 'Range:'+ categories[0]+"to "+categories[categories.length-1]
      },
      categories: categories
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
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
      data: casi
  }, {
      name: 'Morti',
      data: morti
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
