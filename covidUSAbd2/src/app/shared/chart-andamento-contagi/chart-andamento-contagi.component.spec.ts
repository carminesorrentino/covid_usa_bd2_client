import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAndamentoContagiComponent } from './chart-andamento-contagi.component';

describe('ChartAndamentoContagiComponent', () => {
  let component: ChartAndamentoContagiComponent;
  let fixture: ComponentFixture<ChartAndamentoContagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAndamentoContagiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAndamentoContagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
