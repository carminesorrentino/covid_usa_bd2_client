import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQoaCityComponent } from './chart-qoa-city.component';

describe('ChartQoaCityComponent', () => {
  let component: ChartQoaCityComponent;
  let fixture: ComponentFixture<ChartQoaCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartQoaCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQoaCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
