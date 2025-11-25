import { Component, input } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar-all-notes',
  imports: [DatePipe],
  templateUrl: './sidebar-all-notes.html',
  styleUrl: './sidebar-all-notes.css',
})
export class SidebarAllNotes {
  notes = input<INote[]>([]);
}
