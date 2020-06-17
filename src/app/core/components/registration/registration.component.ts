import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../_models/role.enum';
import {RegistrationService} from '../../_services/registration.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {User} from '../../_models/user';


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
  languageArray: string[];
  localizationArray : string[];
  educationArray : string[];
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {

  }


  ngOnInit() {
    this.initRole();
    this.getAllFormDataFromApi();
    this.userRegistrationFormGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(3)]]
    });
    this.userRegistrationFormGroup.get('role').setValue(Role.jobSeeker);

    this.jobSeekerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      language: ['', Validators.required],
      localization: ['', Validators.required],
      education: ['', Validators.required],

    });
  }
  get role() {
    return this.jobSeekerFormGroup.get('role');
  }

 getAllFormDataFromApi(){
    this.registrationService.getLanguageList().pipe(first())
     .subscribe(
       ( res: string[]) => {
         this.languageArray = res;
       },
       error => {
       });

   this.registrationService.getLocalizationList().pipe(first())
     .subscribe(
       ( res: string[]) => {
         this.localizationArray = res;
       },
       error => {
       });

   this.registrationService.getEducationList().pipe(first())
     .subscribe(
       ( res: string[]) => {
         this.educationArray = res;
       },
       error => {
       });
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
