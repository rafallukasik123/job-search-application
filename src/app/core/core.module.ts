import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [LoginComponent, NavigationComponent, RegistrationComponent],
    exports: [
        NavigationComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class CoreModule { }
