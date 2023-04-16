import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceValidationComponent } from './attendance-validation.component';

describe('AttendanceValidationComponent', () => {
  let component: AttendanceValidationComponent;
  let fixture: ComponentFixture<AttendanceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
