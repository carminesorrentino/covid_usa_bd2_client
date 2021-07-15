import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQoaMedioCityStateComponent } from './chart-qoa-medio-city-state.component';

describe('ChartQoaMedioCityStateComponent', () => {
  let component: ChartQoaMedioCityStateComponent;
  let fixture: ComponentFixture<ChartQoaMedioCityStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartQoaMedioCityStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQoaMedioCityStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
