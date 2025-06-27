import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpand } from './table-expand';

describe('TableExpand', () => {
  let component: TableExpand;
  let fixture: ComponentFixture<TableExpand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableExpand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExpand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
