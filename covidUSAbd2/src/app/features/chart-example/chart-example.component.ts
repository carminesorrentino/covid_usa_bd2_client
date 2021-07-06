import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  highcharts_name = Highcharts; //passa il riferimento alla variabile highcharts_name

  /*memorizza le istruzioni per la rappresentazione del chart (da assegnare all'attributo di highcharts-chart [options]*/
  chartOptions = {

      chart: {
          type: 'pie'
      },
      title: {
          text: 'Testo del chart'
      },
      subtitle: {
          text: 'Sottotitolo di prova: <a href="http://statcounter.com" target="_blank">giuliadellasala</a>'
      },
  
      accessibility: {
          announceNewData: {
              enabled: true
          },
          point: {
              valueSuffix: '%'
          }
      },
  
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}%'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
  
      series: [
          {
              name: "Browsers",
              colorByPoint: true,
              data: [
                  {
                      name: "Chrome",
                      y: 62.74,
                      drilldown: "Chrome"
                  },
                  {
                      name: "Firefox",
                      y: 10.57,
                      drilldown: "Firefox"
                  },
                  {
                      name: "Internet Explorer",
                      y: 7.23,
                      drilldown: "Internet Explorer"
                  },
                  {
                      name: "Safari",
                      y: 5.58,
                      drilldown: "Safari"
                  },
                  {
                      name: "Edge",
                      y: 4.02,
                      drilldown: "Edge"
                  },
                  {
                      name: "Opera",
                      y: 1.92,
                      drilldown: "Opera"
                  },
                  {
                      name: "Other",
                      y: 7.62,
                      drilldown: null
                  }
              ]
          }
      ],
    }

  constructor() { }

  ngOnInit(): void {
  }

}
