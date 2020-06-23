import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../_models/role.enum';
import {RegistrationService} from '../../_services/registration.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {User} from '../../_models/user';
import {Registration} from '../../_models/registration';


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
  disableBtnSubmit: boolean;
  private loading: boolean;
  private  error;
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {

  }


  ngOnInit() {
    this.loading = false;
    this.initRole();
    this.getAllFormDataFromApi();
    this.userRegistrationFormGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(3)]]
    });
    this.userRegistrationFormGroup.get('role').setValue(Role.jobSeeker); // domyslna wartosc selecta



    this.jobSeekerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      language: ['', Validators.required],
      localization: ['', Validators.required],
      education: ['', Validators.required],

    });

    this.employerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.setObservablesForm();
  }

  get role(){
    return this.userRegistrationFormGroup.get('role').value;
  }

  setObservablesForm(){
    this.disableBtnSubmit = false;
    this.userRegistrationFormGroup.valueChanges
      .subscribe((changedObj: any) => {
        if (this.userRegistrationFormGroup.invalid){
          this.disableBtnSubmit = false;
        }
        else{
          if (this.userRegistrationFormGroup.value.role === this.usersRole.jobSeeker.value){
            if (this.jobSeekerFormGroup.invalid){
              this.disableBtnSubmit = false;
            }else{
              this.disableBtnSubmit = true;
            }
          }
          else if(this.userRegistrationFormGroup.value.role === this.usersRole.employer.value){
            if (this.employerFormGroup.invalid){
              this.disableBtnSubmit = false;
            }else{
              this.disableBtnSubmit = true;
            }
          }
        }
      });
    this.jobSeekerFormGroup.valueChanges
      .subscribe((changedObj: any) => {
      if (this.userRegistrationFormGroup.invalid  || this.jobSeekerFormGroup.invalid){
        this.disableBtnSubmit = false;
      }else{
        this.disableBtnSubmit = true;
      }
      });

    this.employerFormGroup.valueChanges
      .subscribe((changedObj: any) => {
        if (this.userRegistrationFormGroup.invalid ||  this.employerFormGroup.invalid){
          this.disableBtnSubmit = false;
        }else{
          this.disableBtnSubmit = true;
        }
      });
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

  onSubmit() {
    this.loading = true;

    const registraionDataObject: Registration = {
      login : this.userRegistrationFormGroup.controls.login.value,
      email : this.userRegistrationFormGroup.controls.email.value,
      password : this.userRegistrationFormGroup.controls.password.value,
      role : this.userRegistrationFormGroup.controls.role.value,
    }

    this.registrationService.registration(registraionDataObject)
      .pipe(first())
      .subscribe(
        ( res) => {

        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
