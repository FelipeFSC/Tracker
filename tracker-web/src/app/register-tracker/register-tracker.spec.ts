import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTracker } from './register-tracker';

describe('RegisterTracker', () => {
  let component: RegisterTracker;
  let fixture: ComponentFixture<RegisterTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
