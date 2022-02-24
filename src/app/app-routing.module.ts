import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandPrixEventListComponent } from './components/grand-prix-event-list/grand-prix-event-list.component';
import { GrandPrixEventDetailsComponent } from './components/grand-prix-event-details/grand-prix-event-details.component';
import { AddGrandPrixEventComponent } from './components/add-grand-prix-event/add-grand-prix-event.component';

const routes: Routes = [
  { path: '', redirectTo: 'grand-prix-events', pathMatch: 'full' },
  { path: 'grand-prix-events', component: GrandPrixEventListComponent },
  { path: 'grand-prix-events/add', component: AddGrandPrixEventComponent },
  { path: 'grand-prix-events/:id', component: GrandPrixEventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
