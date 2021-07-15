import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportQoaLockdownComponent } from './chart-report-qoa-lockdown.component';

describe('ChartReportQoaLockdownComponent', () => {
  let component: ChartReportQoaLockdownComponent;
  let fixture: ComponentFixture<ChartReportQoaLockdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartReportQoaLockdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReportQoaLockdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
