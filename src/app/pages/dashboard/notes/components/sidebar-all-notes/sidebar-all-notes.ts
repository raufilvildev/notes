import { ChangeDetectorRef, Component, effect, input, output } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar-all-notes',
  imports: [DatePipe],
  templateUrl: './sidebar-all-notes.html',
  styleUrl: './sidebar-all-notes.css',
})
export class SidebarAllNotes {
  constructor() {
    effect(() => {
      const notes = this.notes();
      const note = this.note();

      this.originalNotes = [...notes];
      this.editedNotes = [...notes];

      if (!note) {
        this.selectedNoteUuid = '';
      }
    });
  }

  notes = input<INote[]>([]);
  note = input<INote>();
  allNotes = input<INote[]>([]);
  title = input<string>('');
  showSearchBar = input<boolean>(false);

  noteOutput = output<INote>();

  selectedNoteUuid: string = '';
  searchText: string = '';
  originalNotes: INote[] = [];
  editedNotes: INote[] = [];
}
