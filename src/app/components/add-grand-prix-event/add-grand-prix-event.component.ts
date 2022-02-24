import { Component, OnInit } from '@angular/core';
import { GrandPrixEvent } from '../../models/grand-prix-event.model';
import { GrandPrixEventService } from '../../services/grand-prix-event.service';
@Component({
  selector: 'app-add-grand-prix-event',
  templateUrl: './add-grand-prix-event.component.html',
  styleUrls: ['./add-grand-prix-event.component.css'],
})
export class AddGrandPrixEventComponent implements OnInit {
  grandPrixEvent: GrandPrixEvent = {
    hostingCountry: '',
    hostingCountryAlphaTwoCode: '',
    hostingCity: '',
    eventName: '',
    eventStartDate: new Date(),
    eventEndDate: new Date(),
    betEndDate: new Date(),
  };
  submitted = false;

  constructor(private grandPrixEventService: GrandPrixEventService) {}

  ngOnInit(): void {}
  saveGrandPrixEvent(): void {
    const data = {
      hostingCountry: this.grandPrixEvent.hostingCountry,
      hostingCountryAlphaTwoCode:
        this.grandPrixEvent.hostingCountryAlphaTwoCode,
      hostingCity: this.grandPrixEvent.hostingCity,
      eventName: this.grandPrixEvent.eventName,
      eventStartDate: this.grandPrixEvent.eventStartDate,
      eventEndDate: this.grandPrixEvent.eventEndDate,
      betEndDate: this.grandPrixEvent.betEndDate,
    };
    this.grandPrixEventService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (err) => console.error(err),
    });
  }

  newGrandPrixEvent(): void {
    this.submitted = false;
    this.grandPrixEvent = {
      hostingCountry: '',
      hostingCountryAlphaTwoCode: '',
      hostingCity: '',
      eventName: '',
      eventStartDate: new Date(),
      eventEndDate: new Date(),
      betEndDate: new Date(),
    };
  }
}
