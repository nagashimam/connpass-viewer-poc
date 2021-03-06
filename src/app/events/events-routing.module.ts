import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [{ path: '', component: EventsComponent }, { path: 'summary', loadChildren: () => import('../summary/summary.module').then(m => m.SummaryModule) }, { path: 'details', loadChildren: () => import('../details/details.module').then(m => m.DetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
