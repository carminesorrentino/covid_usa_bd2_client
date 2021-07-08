import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondizioniComponent } from './condizioni.component';

describe('CondizioniComponent', () => {
  let component: CondizioniComponent;
  let fixture: ComponentFixture<CondizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondizioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
