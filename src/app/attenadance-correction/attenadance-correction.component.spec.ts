import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenadanceCorrectionComponent } from './attenadance-correction.component';

describe('AttenadanceCorrectionComponent', () => {
  let component: AttenadanceCorrectionComponent;
  let fixture: ComponentFixture<AttenadanceCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenadanceCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttenadanceCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
