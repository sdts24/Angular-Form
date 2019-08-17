import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm (UserSettings: UserSettings): Observable<any> {
      
    return this.http.post('https://putsreq.com/a9iP4oydjZ5ihMK8Y0rZ', UserSettings);
    //return of(UserSettings);
  }
}
