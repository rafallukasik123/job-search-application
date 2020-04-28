import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';


@NgModule({
  declarations: [JobSeekerComponent],
  imports: [
    CommonModule,
    JobSeekerRoutingModule
  ]
})
export class JobSeekerModule { }
