import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { CreateJobOfferComponent } from './pages/create-job-offer/create-job-offer.component';


@NgModule({
  declarations: [JobSeekerComponent, CreateJobOfferComponent],
  imports: [
    CommonModule,
    JobSeekerRoutingModule
  ]
})
export class JobSeekerModule { }
