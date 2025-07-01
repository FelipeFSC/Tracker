import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTemplate } from './task-template';

describe('TaskTemplate', () => {
  let component: TaskTemplate;
  let fixture: ComponentFixture<TaskTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
