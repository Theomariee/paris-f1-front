import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandPrixEventDetailsComponent } from './grand-prix-event-details.component';

describe('GrandPrixEventDetailsComponent', () => {
  let component: GrandPrixEventDetailsComponent;
  let fixture: ComponentFixture<GrandPrixEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandPrixEventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandPrixEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
