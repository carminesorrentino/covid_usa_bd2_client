Installare le dipendenze:
1) DevExtreme CLI: npx -p devextreme-cli devextreme add devextreme-angular
2) Devextreme e Devextreme-angular npm packages: npm install devextreme@21.1 devextreme-angular@21.1 --save --save-exact




Importare nel modulo in cui usiamo la table il module:
    import {DxDataGridModule} from 'devextreme-angular'

    imports : [
        ...
        HighchartsChartModule,
        ...
    ]




In angular.json inserire il riferimento al file devextreme (come bootstrap) in styles: 

    "styles": [
                "node_modules/devextreme/dist/css/dx.light.css",
                "src/styles.css"
                ],





