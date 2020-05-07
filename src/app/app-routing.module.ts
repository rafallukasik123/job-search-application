import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component';
import {AuthGuard} from './core/_helpers/auth.guard';
import {Role} from './core/_models/role.enum';
const routes: Routes = [{
  path: 'jobSeeker', loadChildren: () => import('./feature/job-seeker/job-seeker.module').then(m => m.JobSeekerModule) , canActivate: [AuthGuard] ,  data: { roles: [Role.jobSeeker]}},
  { path: '', component: LoginComponent },
  { path: 'employer', loadChildren: () => import('./feature/employer/employer.module').then(m => m.EmployerModule), canActivate: [AuthGuard] ,  data: { roles: [Role.employer]} },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
