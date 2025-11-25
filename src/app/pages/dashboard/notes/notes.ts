import { Component, input } from '@angular/core';
import { INote } from '../../../interfaces/i-note';
import { PageHeader } from './components/page-header/page-header';
import { SidebarAllNotes } from './components/sidebar-all-notes/sidebar-all-notes';
import { Content } from './components/content/content';
import { SidebarRightMenu } from './components/sidebar-right-menu/sidebar-right-menu';

@Component({
  selector: 'app-notes',
  imports: [PageHeader, SidebarAllNotes, Content, SidebarRightMenu],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  notes = input<INote[]>([]);

  title: string = 'Todas las notas';
}
