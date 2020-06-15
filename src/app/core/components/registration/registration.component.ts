import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userRegistrationFormGroup: FormGroup;
  jobSeekerFormGroup: FormGroup;
  employerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.userRegistrationFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.jobSeekerFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
