import { Component, OnInit } from '@angular/core';
import { BetService } from '../../services/bet.service';
import { GrandPrixEvent } from '../../models/grand-prix-event.model';
import { GrandPrixEventService } from '../../services/grand-prix-event.service';
import { GrandPrixEventLiveStatus } from '../../models/grand-prix-event-live-status-enum.model';

@Component({
  selector: 'app-bets-list',
  templateUrl: './bets-list.component.html',
  styleUrls: ['./bets-list.component.css'],
})
export class BetsListComponent implements OnInit {
  grandPrixEventsToCome?: GrandPrixEvent[] = [];
  currentDate?: Date;
  GrandPrixEventLiveStatus = GrandPrixEventLiveStatus;

  constructor(
    private betService: BetService,
    private grandPrixEventService: GrandPrixEventService
  ) {}

  ngOnInit(): void {
    this.retrieveGrandPrixEvents();
    this.currentDate = new Date();
  }

  retrieveGrandPrixEvents(): void {
    this.grandPrixEventService.getAll().subscribe({
      next: (data) => {
        this.grandPrixEventsToCome = data;
        console.log(data);
        this.retrieveBets();
      },
      error: (err) => console.error(err),
    });
  }

  retrieveBets(): void {
    // @ts-ignore
    for (let grandPrix of Object.values(this.grandPrixEventsToCome)) {
      this.grandPrixEventService.getAllBets(grandPrix.id).subscribe({
        next: (data) => {
          grandPrix.bets = data;
          console.log(data);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
