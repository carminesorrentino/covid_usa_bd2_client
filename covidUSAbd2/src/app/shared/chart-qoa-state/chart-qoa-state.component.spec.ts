import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQoaStateComponent } from './chart-qoa-state.component';

describe('ChartQoaStateComponent', () => {
  let component: ChartQoaStateComponent;
  let fixture: ComponentFixture<ChartQoaStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartQoaStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQoaStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
