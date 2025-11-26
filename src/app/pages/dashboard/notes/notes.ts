import { Component, input, output } from '@angular/core';
import { INote } from '../../../interfaces/i-note';
import { PageHeader } from './components/page-header/page-header';
import { SidebarAllNotes } from './components/sidebar-all-notes/sidebar-all-notes';
import { Content } from './components/content/content';
import { SidebarRightMenu } from './components/sidebar-right-menu/sidebar-right-menu';
import { MenuBar } from './components/menu-bar/menu-bar';

@Component({
  selector: 'app-notes',
  imports: [PageHeader, SidebarAllNotes, Content, SidebarRightMenu, MenuBar],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  notes = input<INote[]>([]);
  title = input<string>('');

  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();
  allNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  searchNotesOutput = output<string>();

  note?: INote;
  showSidebarAllNotes: boolean = true;
  showContent: boolean = false;
}
