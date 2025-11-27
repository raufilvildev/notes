import { Component, effect, input, output } from '@angular/core';
import { Tags } from './components/tags/tags';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [Tags],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.css',
})
export class SidebarNavigation {
  constructor() {
    effect(() => {
      const isAllNotes = this.allNotesInput();
      const isArchiveNotes = this.archiveNotesInput();
      const isTaggedNotes = this.taggedNotesInput();
      const isSearchNotes = this.searchNotesInput();

      if (isAllNotes) {
        this.allNotes = true;
        this.archivedNotes = false;
        this.selectedTag = '';
      } else if (isArchiveNotes) {
        this.allNotes = false;
        this.archivedNotes = true;
        this.selectedTag = '';
      } else if (isTaggedNotes) {
        this.allNotes = false;
        this.archivedNotes = false;
        this.selectedTag = isTaggedNotes;
      } else if (isSearchNotes) {
        this.allNotes = false;
        this.archivedNotes = false;
        this.selectedTag = '';
        return;
      }
    });
  }

  tags = input<string[]>();
  allNotesInput = input<boolean>(true);
  archiveNotesInput = input<boolean>(false);
  taggedNotesInput = input<string>('');
  searchNotesInput = input<boolean>(false);

  allNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  taggedNotesOutput = output<string>();

  allNotes: boolean = true;
  archivedNotes: boolean = false;
  selectedTag: string = '';
}
