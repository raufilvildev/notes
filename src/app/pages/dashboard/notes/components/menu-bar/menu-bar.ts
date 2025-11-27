import { Component, output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {
  allNotesOutput = output<void>();
  searchNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  tagsOutput = output<void>();

  activeButtons: boolean[] = [true, false, false, false, false];
}
