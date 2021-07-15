import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-pie-percentuali-contee-stato',
  templateUrl: './chart-pie-percentuali-contee-stato.component.html',
  styleUrls: ['./chart-pie-percentuali-contee-stato.component.css']
})
export class ChartPiePercentualiConteeStatoComponent implements OnInit, OnChanges {

  @Input() answer;

  @Input() projMap;

  chartOptions= {};

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges): void {

    console.log('answer in chart pie',this.answer)

      this.chartOptions = {

        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          backgroundColor: '#2e2d2d8a'
      },
      title: {
          text: 'Percentuale casi Covid-19 per lo stato: '+this?.answer?.result[0]?.state,
          style: {
            color: 'white'
        }
      },
      tooltip: {
          pointFormat: '<b>{point.y} casi</b>'
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
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  connectorColor: 'silver',
                  style: {
                    color: 'white'
                }
              }
          }
      },
      series: [{
          name: '{point.name}',
          data: this?.answer.data
      }]

    }

    Highcharts.chart('pie_container',this.chartOptions)

  }

}
