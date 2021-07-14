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

  chartOptions={}  //proprietà del chart

  constructor(){}

  ngOnChanges(simpleChanges : SimpleChanges){

    var categories= this.answer.qf_categories;
    var morti=this.answer.qf_deaths;
    var casi= this.answer.qf_cases;;
    console.log(this.answer)
    

    console.log("categorie",categories)

    this.chartOptions={
     
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Browser market shares in January, 2018'
              },
              tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
                          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                      }
                  }
              },
              series: [{
                  name: 'Brands',
                  colorByPoint: true,
                  data: [{
                      name: 'Chrome',
                      y: 61.41,
                      sliced: true,
                      selected: true
                  }, {
                      name: 'Internet Explorer',
                      y: 11.84
                  }, {
                      name: 'Firefox',
                      y: 10.85
                  }, {
                      name: 'Edge',
                      y: 4.67
                  }, {
                      name: 'Safari',
                      y: 4.18
                  }, {
                      name: 'Sogou Explorer',
                      y: 1.64
                  }, {
                      name: 'Opera',
                      y: 1.6
                  }, {
                      name: 'QQ',
                      y: 1.2
                  }, {
                      name: 'Other',
                      y: 2.61
                  }]
              }]

    }

    Highcharts.chart('container',this.chartOptions)

  }

}
