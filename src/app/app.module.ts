import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGrandPrixEventComponent } from './components/add-grand-prix-event/add-grand-prix-event.component';
import { GrandPrixEventDetailsComponent } from './components/grand-prix-event-details/grand-prix-event-details.component';
import { GrandPrixEventListComponent } from './components/grand-prix-event-list/grand-prix-event-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BetsListComponent } from './components/bets-list/bets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGrandPrixEventComponent,
    GrandPrixEventDetailsComponent,
    GrandPrixEventListComponent,
    BetsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
