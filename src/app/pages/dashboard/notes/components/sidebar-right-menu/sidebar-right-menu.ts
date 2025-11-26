import { Component, input, output } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';

@Component({
  selector: 'app-sidebar-right-menu',
  imports: [],
  templateUrl: './sidebar-right-menu.html',
  styleUrl: './sidebar-right-menu.css',
})
export class SidebarRightMenu {
  note = input<INote | undefined>();

  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();

  hoverArchiveRestore: boolean = false;
  hoverDelete: boolean = false;

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
