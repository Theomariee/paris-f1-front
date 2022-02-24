import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandPrixEventListComponent } from './grand-prix-event-list.component';

describe('GrandPrixEventListComponent', () => {
  let component: GrandPrixEventListComponent;
  let fixture: ComponentFixture<GrandPrixEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandPrixEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandPrixEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
