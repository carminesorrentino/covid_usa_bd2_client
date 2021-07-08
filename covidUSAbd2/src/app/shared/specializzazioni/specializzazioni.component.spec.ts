import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializzazioniComponent } from './specializzazioni.component';

describe('SpecializzazioniComponent', () => {
  let component: SpecializzazioniComponent;
  let fixture: ComponentFixture<SpecializzazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializzazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializzazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
