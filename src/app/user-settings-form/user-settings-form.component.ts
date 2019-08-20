import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name:null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    note: null    
  };

  subscriptionTypes: Observable<string[]>;

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    )
  }

}
