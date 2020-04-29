import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component'
import {AuthGuard} from './core/_helpers/auth.guard';
const routes: Routes = [{ path: 'jobSeeker', loadChildren: () => import('./feature/job-seeker/job-seeker.module').then(m => m.JobSeekerModule) , canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
