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
  @Input() condizione : string;
  @Input() states : string[];
  @Input() counties : string[];
  @Input() cities : string[];
  
  //genera evento per notificare HomepageComponent
  @Output() specializzazioneDefaultElement : EventEmitter<Integration> = new EventEmitter();  //restituisce al caricamento della componente un array integration contenente i valori di default a homepage.component
  @Output() specializzazioniHandler : EventEmitter<Integration> = new EventEmitter(); 

  //Restituisce un oggetti Integration con tutti i campi
  integration : Integration;

  //flags
  visualizzaResetAirQuality : boolean = false; //false = non vedere, true = mostra pulsante
  visualizzaResetCasiCovid : boolean = false; //false = non vedere, true = mostra pulsante
  visualizzaResetMortiCovid : boolean = false; //false = non vedere, true = mostra pulsante

  constructor(public service : MainService) { }

  ngOnInit(): void {
    //console.log('specializzazioni integration onInit', this.integration)

    let newIntegration = {
      airQuality : {
        minoreDi : undefined,
        maggioreDi : undefined
      },
      covid : {
        casi : {
          minoreDi : undefined,
          maggioreDi : undefined
        },
        morti : {
          minoreDi : undefined,
          maggioreDi : undefined
        }
      },
      lockdown : {
        tipo : 'Nessuno'
      },
      criterioDiRicerca : {
        tipo : this.condizione,
        value : 'Tutti',
      }
    }

    this.integration = newIntegration;

    this.specializzazioneDefaultElement.emit(this.integration);  //notifica homepage component con integration di default
    
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('OnBestemmioChanges -> pagination value: ', this.pagination)
    // changes.prop contains the old and the new value...
    //console.log('condizione di ricerca',this.condizione)


    //console.log('can',this.states)
  }

  getSpecializzazioni($event){

    //console.log(this.integration)

    switch($event.srcElement.id){
      case 'AirQualityMin' : this.visualizzaResetAirQuality = true; this.checkMin($event); this.integration.airQuality.minoreDi = +($event.srcElement.value); break;
      case 'AirQualityMax' : this.visualizzaResetAirQuality = true; this.checkMin($event); this.integration.airQuality.maggioreDi = +($event.srcElement.value); break;
      case 'CasiMin' : this.visualizzaResetCasiCovid = true; this.checkMin($event); this.integration.covid.casi.minoreDi = +($event.srcElement.value); break;
      case 'CasiMax' : this.visualizzaResetCasiCovid = true; this.checkMin($event); this.integration.covid.casi.maggioreDi = +($event.srcElement.value); break;
      case 'MortiMin' : this.visualizzaResetMortiCovid = true; this.checkMin($event); this.integration.covid.morti.minoreDi = +($event.srcElement.value); break;
      case 'MortiMax' : this.visualizzaResetMortiCovid = true; this.checkMin($event); this.integration.covid.morti.maggioreDi = +($event.srcElement.value); break;
      case 'TipoLockdown' : this.integration.lockdown.tipo = $event.srcElement.value; break;
      case 'SelectedItem' : this.integration.criterioDiRicerca.tipo = this.condizione; this.integration.criterioDiRicerca.value = $event.srcElement.value; break;
    }

    //console.log('specializzazioni id', $event.srcElement.id)
    //console.log('specializzaioni values',$event.srcElement.value);
    //console.log('integration', this.integration)

    this.specializzazioniHandler.emit(this.integration);

  }

  /*Se viene inserito un valore minore di 0, setta il campo del form a 0 di default*/
  /*Arrotonda il risultato, prendendo in considerazione solo la parte intera*/
  checkMin($event){
    console.log(+($event.srcElement.value))
    if(+($event.srcElement.value) < 0){
      $event.srcElement.value = 0;
    }
    $event.srcElement.value = Math.floor(+($event.srcElement.value))
  }

  /*setta nuovamente valori di default per air_quality e modifica la variabile per visualizzare il pulsante (reset) facendolo sparire*/
  resetAirQuality(){

    this.integration.airQuality.maggioreDi = undefined;
    this.integration.airQuality.minoreDi = undefined;

    this.visualizzaResetAirQuality = false;
  }

  /*setta nuovamente valori di default per casi covid e modifica la variabile per visualizzare il pulsante (reset) facendolo sparire*/
  resetCasiCovid(){

    this.integration.covid.casi.maggioreDi = undefined;
    this.integration.covid.casi.minoreDi = undefined;

    this.visualizzaResetCasiCovid = false;
  }

  /*setta nuovamente valori di default per morti covid e modifica la variabile per visualizzare il pulsante (reset) facendolo sparire*/
  resetMortiCovid(){
    this.integration.covid.morti.maggioreDi = undefined;
    this.integration.covid.morti.minoreDi = undefined;

    this.visualizzaResetMortiCovid = false;
  }





}
