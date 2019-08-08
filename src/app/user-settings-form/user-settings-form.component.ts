import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name:'Starlyng Trinidad',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    note: 'Usuarrio Inscrito Exitosamente...'    
  }

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit() {
  }

}
