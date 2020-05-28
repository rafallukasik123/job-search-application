import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [LoginComponent, NavigationComponent],
    exports: [
        NavigationComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class CoreModule { }
