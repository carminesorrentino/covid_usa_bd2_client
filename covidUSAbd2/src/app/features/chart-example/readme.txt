Installare le dipendenze:
1) Highcharts: npm install highcharts 
2) Highcharts-angular: npm install highcharts-angular





Importare nel modulo in cui usiamo il chart il module:
    import {HighchartsChartModule} from 'highcharts-angular'

    imports : [
        ...
        HighchartsChartModule,
        ...
    ]





Nella componente in cui andiamo a definire il chart:
1) import * as Highcharts from 'highcharts'
2) nella classe:
    highcharts_name = Highcharts; //individuare il nome del chart da passare all'attributo [Highcharts] nell'HTML
    chartOptions = {
        //inserire il codice del chart da personalizzare presente su highchart.com/demo
        //anche questa variabile sarà assegnata all'attributo [options] del tag highcharts-chart nell'HTML
    }






Nell'HTML:
    <highcharts-chart [options]='chartOptions' [Highcharts]='highcharts'></highcharts-chart>