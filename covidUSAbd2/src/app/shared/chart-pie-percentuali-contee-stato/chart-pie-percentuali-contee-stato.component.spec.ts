import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPiePercentualiConteeStatoComponent } from './chart-pie-percentuali-contee-stato.component';

describe('ChartPiePercentualiConteeStatoComponent', () => {
  let component: ChartPiePercentualiConteeStatoComponent;
  let fixture: ComponentFixture<ChartPiePercentualiConteeStatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPiePercentualiConteeStatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPiePercentualiConteeStatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
