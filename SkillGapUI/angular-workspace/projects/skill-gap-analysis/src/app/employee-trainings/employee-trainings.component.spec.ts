import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrainingsComponent } from './employee-trainings.component';

describe('EmployeeTrainingsComponent', () => {
  let component: EmployeeTrainingsComponent;
  let fixture: ComponentFixture<EmployeeTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
