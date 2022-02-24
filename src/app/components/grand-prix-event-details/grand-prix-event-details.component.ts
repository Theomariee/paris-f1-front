import { Component, Input, OnInit } from '@angular/core';
import { GrandPrixEventService } from '../../services/grand-prix-event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GrandPrixEvent } from '../../models/grand-prix-event.model';
@Component({
  selector: 'app-grand-prix-event-details',
  templateUrl: './grand-prix-event-details.component.html',
  styleUrls: ['./grand-prix-event-details.component.css'],
})
export class GrandPrixEventDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentGrandPrixEvent: GrandPrixEvent = {
    hostingCountry: '',
    hostingCountryAlphaTwoCode: '',
    hostingCity: '',
    eventName: '',
    eventStartDate: new Date(),
    eventEndDate: new Date(),
    betEndDate: new Date(),
  };

  message = '';
  constructor(
    private grandPrixEventService: GrandPrixEventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getGrandPrixEvent(this.route.snapshot.params['id']);
    }
  }
  getGrandPrixEvent(id: string): void {
    this.grandPrixEventService.get(id).subscribe({
      next: (data) => {
        this.currentGrandPrixEvent = data;
        console.log(data);
      },
      error: (err) => console.error(err),
    });
  }
  updateGrandPrixEvent(): void {
    this.message = '';
    this.grandPrixEventService
      .update(this.currentGrandPrixEvent.id, this.currentGrandPrixEvent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Ce Grand-Prix a été mis à jour avec succès !';
        },
      });
  }
  deleteGrandPrixEvent(): void {
    this.grandPrixEventService.delete(this.currentGrandPrixEvent.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/grand-prix-events']);
      },
      error: (err) => console.error(err),
    });
  }

  dateChanged(eventDate: string): Date | undefined {
    return !!eventDate ? new Date(eventDate) : undefined;
  }
}
