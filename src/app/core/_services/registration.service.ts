import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';
import {Registration} from '../_models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getLanguageList() {
    return this.http.get<string[]>(`${environment.apiUrl}/jobSeeker/getLanguageList`);
  }
  getLocalizationList() {
    return this.http.get<string[]>(`${environment.apiUrl}/jobSeeker/getLocalizationList`);
  }
  getEducationList() {
    return this.http.get<string[]>(`${environment.apiUrl}/jobSeeker/getEducationList`);
  }
  employerCreateData() {
    return this.http.post(`${environment.apiUrl}/employer/createData`, {});
  }
  jobSeekerCreateData() {
    return this.http.post(`${environment.apiUrl}/jobSeeker/createData`, {});
  }
  registration(registrationData: Registration) {
    return this.http.post<User>(`${environment.apiUrl}/user/registration`, {login: registrationData.login , password :  registrationData.password , role: registrationData.role, email: registrationData.email});
  }
}
