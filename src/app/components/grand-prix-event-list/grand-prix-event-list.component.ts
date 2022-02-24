import { Component, OnInit } from '@angular/core';
import { GrandPrixEvent } from '../../models/grand-prix-event.model';
import { GrandPrixEventService } from '../../services/grand-prix-event.service';

@Component({
  selector: 'app-grand-prix-event-list',
  templateUrl: './grand-prix-event-list.component.html',
  styleUrls: ['./grand-prix-event-list.component.css'],
})
export class GrandPrixEventListComponent implements OnInit {
  grandPrixEvents?: GrandPrixEvent[];
  currentGrandPrixEvent: GrandPrixEvent = {};
  currentIndex = -1;
  constructor(private grandPrixEventService: GrandPrixEventService) {}

  ngOnInit(): void {
    this.retrieveGrandPrixEvents();
  }

  retrieveGrandPrixEvents(): void {
    this.grandPrixEventService.getAll().subscribe({
      next: (data) => {
        this.grandPrixEvents = data;
        console.log(data);
      },
      error: (err) => console.error(err)
    });
  }

  setActiveGrandPrixEvent(grandPrixEvent: GrandPrixEvent, index: number): void {
    this.currentGrandPrixEvent = grandPrixEvent;
    this.currentIndex = index;
  }
}
