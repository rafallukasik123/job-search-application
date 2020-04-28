import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSeekerComponent } from './job-seeker.component';

const routes: Routes = [{ path: '', component: JobSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
