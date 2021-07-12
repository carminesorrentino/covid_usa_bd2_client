import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFrequentiComponent } from './query-frequenti.component';

describe('QueryFrequentiComponent', () => {
  let component: QueryFrequentiComponent;
  let fixture: ComponentFixture<QueryFrequentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFrequentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFrequentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
