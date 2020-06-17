import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

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
}
