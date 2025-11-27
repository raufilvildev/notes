import { Component, input, output } from '@angular/core';
import { INote } from '../../../../../../../interfaces/i-note';

@Component({
  selector: 'app-page-header-control',
  imports: [],
  templateUrl: './page-header-control.html',
  styleUrl: './page-header-control.css',
})
export class PageHeaderControl {
  note = input<INote>();

  returnSidebarAllNotes = output<void>();
  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();

  onArchiveRestoreNote() {
    if (this.note()?.status === 'active') {
      this.archiveNote.emit(this.note() as INote);
    } else {
      this.restoreNote.emit(this.note() as INote);
    }
  }

  onDeleteNote() {
    this.deleteNote.emit(this.note() as INote);
  }
}
