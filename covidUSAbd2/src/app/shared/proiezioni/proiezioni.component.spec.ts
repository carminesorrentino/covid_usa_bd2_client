import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiezioniComponent } from './proiezioni.component';

describe('ProiezioniComponent', () => {
  let component: ProiezioniComponent;
  let fixture: ComponentFixture<ProiezioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProiezioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProiezioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
