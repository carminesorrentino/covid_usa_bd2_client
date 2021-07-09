import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Integration } from 'src/app/interface/integration';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-specializzazioni',
  templateUrl: './specializzazioni.component.html',
  styleUrls: ['./specializzazioni.component.css']
})
export class SpecializzazioniComponent implements OnInit, OnChanges {

  @Input() pagination : string;
  
  //genera evento per notificare HomepageComponent
  @Output() proiezioniHandler : EventEmitter<Integration> = new EventEmitter(); 

  //Restituisce un oggetti Integration con tutti i campi
  integration : Integration;

  //Valori da restituire
  airQualityMin : number = 0;
  airQualityMax : number = 0;
  casiMin : number = 0;
  casiMax : number = 0;
  mortiMin : number = 0;
  mortiMax : number = 0;
  tipoLockdown : string = 'Stay at home';

  constructor(public service : MainService) { }

  ngOnInit(): void {
    //console.log('specializzazioni integration onInit', this.integration)

    let newIntegration = {
      airQuality : {
        minoreDi : 0,
        maggioreDi : 0
      },
      covid : {
        casi : {
          minoreDi : 0,
          maggioreDi : 0
        },
        morti : {
          minoreDi : 0,
          maggioreDi : 0
        }
      },
      lockdown : {
        tipo : 'Stay at home'
      }
    }

    this.integration = newIntegration;
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnBestemmioChanges -> pagination value: ', this.pagination)
    // changes.prop contains the old and the new value...
  }

  getSpecializzazioni($event){

    console.log(this.integration)

    switch($event.srcElement.id){
      case 'AirQualityMin' : this.integration.airQuality.minoreDi = +($event.srcElement.value); break;
      case 'AirQualityMax' : this.integration.airQuality.maggioreDi = +($event.srcElement.value); break;
      case 'CasiMin' : this.integration.covid.casi.minoreDi = +($event.srcElement.value); break;
      case 'CasiMax' : this.integration.covid.casi.maggioreDi = +($event.srcElement.value); break;
      case 'MortiMin' : this.integration.covid.morti.minoreDi = +($event.srcElement.value); break;
      case 'MortiMax' : this.integration.covid.morti.maggioreDi = +($event.srcElement.value); break;
      case 'TipoLockdown' : this.integration.lockdown.tipo = $event.srcElement.value; break;
    }

    //console.log('specializzazioni id', $event.srcElement.id)
    //console.log('specializzaioni values',$event.srcElement.value);
    console.log('integration', this.integration)

  }





}
