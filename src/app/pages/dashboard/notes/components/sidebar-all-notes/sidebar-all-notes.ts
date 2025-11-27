import { Component, effect, input, output } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar-all-notes',
  imports: [DatePipe],
  templateUrl: './sidebar-all-notes.html',
  styleUrl: './sidebar-all-notes.css',
})
export class SidebarAllNotes {
  constructor() {}

  notes = input<INote[]>([]);
  title = input<string>('');
  showSearchBar = input<boolean>(false);

  noteOutput = output<INote>();

  selectedNoteUuid: string = '';
  searchText: string = '';
  originalNotes: INote[] = [];
  editedNotes: INote[] = [];

  ngOnInit() {
    this.originalNotes = [...this.notes()];
    this.editedNotes = [...this.notes()];
  }

  onKeyDownEnter(search: string) {
    this.searchText = search;
    if (search === '') {
      this.editedNotes = [...this.notes()];
      return;
    }

    this.editedNotes = this.originalNotes.filter(
      (note) =>
        note.title.includes(search) ||
        note.content.includes(search) ||
        note.tags.some((tag) => tag.includes(search))
    );
  }
}
