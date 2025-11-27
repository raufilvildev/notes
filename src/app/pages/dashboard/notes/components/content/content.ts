import { Component, input, output } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';
import { PageHeaderControl } from './components/page-header-control/page-header-control';

@Component({
  selector: 'app-content',
  imports: [DatePipe, PageHeaderControl],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  note = input<INote | undefined>(undefined);

  returnSidebarAllNotes = output<void>();
  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();
}
