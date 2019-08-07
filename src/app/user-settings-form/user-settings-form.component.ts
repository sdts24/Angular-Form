import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name:'Starlyng Trinidad',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    note: 'Usuarrio Inscrito Exitosamente...'    
  }
  constructor() { }

  ngOnInit() {
  }

}
