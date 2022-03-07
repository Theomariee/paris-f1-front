import { GrandPrixEvent } from './grand-prix-event.model';
import { BetRacePosition } from './bet-race-position.model';
import {Player} from "./player.model";

export class Bet {
  id?: bigint;
  player?: Player;
  grandPrixEvent?: GrandPrixEvent;
  betRacePositions?: BetRacePosition[];
}
