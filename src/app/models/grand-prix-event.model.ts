import { Bet } from './bet.model';
import { GrandPrixEventLiveStatus } from './grand-prix-event-live-status-enum.model';

export class GrandPrixEvent {
  id?: bigint;
  hostingCountry?: string;
  hostingCountryAlphaTwoCode?: string;
  hostingCity?: string;
  eventName?: string;
  eventStartDate?: Date;
  eventEndDate?: Date;
  betEndDate?: Date;
  liveStatus?: GrandPrixEventLiveStatus;
  bets?: Bet[];
}
