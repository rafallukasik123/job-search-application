import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSeekerComponent } from './job-seeker.component';
import {CreateJobOfferComponent} from './pages/create-job-offer/create-job-offer.component';

const routes: Routes = [{ path: '', component: JobSeekerComponent ,  children: [
    {    path: 'createJobOffer', component: CreateJobOfferComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
