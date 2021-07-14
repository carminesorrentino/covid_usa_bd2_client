import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridQueryFrequentiComponent } from './grid-query-frequenti.component';

describe('GridQueryFrequentiComponent', () => {
  let component: GridQueryFrequentiComponent;
  let fixture: ComponentFixture<GridQueryFrequentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridQueryFrequentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridQueryFrequentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
