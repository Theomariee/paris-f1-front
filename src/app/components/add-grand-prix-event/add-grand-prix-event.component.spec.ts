import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrandPrixEventComponent } from './add-grand-prix-event.component';

describe('AddGrandPrixEventComponent', () => {
  let component: AddGrandPrixEventComponent;
  let fixture: ComponentFixture<AddGrandPrixEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrandPrixEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrandPrixEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
