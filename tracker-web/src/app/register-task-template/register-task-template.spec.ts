import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaskTemplate } from './register-task-template';

describe('RegisterTaskTemplate', () => {
  let component: RegisterTaskTemplate;
  let fixture: ComponentFixture<RegisterTaskTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterTaskTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTaskTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
