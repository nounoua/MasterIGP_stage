import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegularizationComponent } from './my-regularization.component';

describe('MyRegularizationComponent', () => {
  let component: MyRegularizationComponent;
  let fixture: ComponentFixture<MyRegularizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRegularizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRegularizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
