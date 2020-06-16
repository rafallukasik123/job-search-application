import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../_models/role.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userRegistrationFormGroup: FormGroup;
  jobSeekerFormGroup: FormGroup;
  employerFormGroup: FormGroup;
  usersRole: any;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.initRole();
    this.userRegistrationFormGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required]
    });
    this.userRegistrationFormGroup.get('role').setValue(Role.jobSeeker);
    this.jobSeekerFormGroup = this.formBuilder.group({
      secondCtrl: [Role.jobSeeker, Validators.required]
    });
  }
  get role() {
    return this.jobSeekerFormGroup.get('role');
  }

  initRole(){
    const {jobSeeker, employer} = Role;
    this.usersRole = {
      jobSeeker : {
        value : jobSeeker,
        displayValue : 'Szukam pracy'
      },
      employer : {
        value : employer,
        displayValue : 'Jestem pracodawcą'
      }
    };
  }
}
