import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component';
import {AuthGuard} from './core/_helpers/auth.guard';
import {Role} from './core/_models/role.enum';
import {FrontPageComponent} from './shered/components/front-page/front-page.component';
import {RegistrationComponent} from './core/components/registration/registration.component';

const routes: Routes = [{
  path: 'jobSeeker', loadChildren: () => import('./feature/job-seeker/job-seeker.module').then(m => m.JobSeekerModule) , canActivate: [AuthGuard] ,  data: { roles: [Role.jobSeeker]}},
  { path: 'employer', loadChildren: () => import('./feature/employer/employer.module').then(m => m.EmployerModule), canActivate: [AuthGuard] ,  data: { roles: [Role.employer]} },
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '**', redirectTo: '' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
