import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerRegister } from './tracker-register';

describe('RegisterTracker', () => {
  let component: TrackerRegister;
  let fixture: ComponentFixture<TrackerRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackerRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
