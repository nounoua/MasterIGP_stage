import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeworkingComponent } from './timeworking.component';

describe('TimeworkingComponent', () => {
  let component: TimeworkingComponent;
  let fixture: ComponentFixture<TimeworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeworkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
