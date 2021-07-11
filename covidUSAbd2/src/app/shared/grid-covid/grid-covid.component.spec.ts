import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCovidComponent } from './grid-covid.component';

describe('GridCovidComponent', () => {
  let component: GridCovidComponent;
  let fixture: ComponentFixture<GridCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
