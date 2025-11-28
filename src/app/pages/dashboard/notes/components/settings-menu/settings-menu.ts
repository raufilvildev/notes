import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  imports: [],
  templateUrl: './settings-menu.html',
  styleUrl: './settings-menu.css',
})
export class SettingsMenu {
  settingsPage = input<string>();

  colorTheme = output<void>();
  fontTheme = output<void>();
  changePassword = output<void>();
}
