import { Component, effect, input, output } from '@angular/core';
import { INote } from '../../../interfaces/i-note';
import { PageHeader } from './components/page-header/page-header';
import { SidebarAllNotes } from './components/sidebar-all-notes/sidebar-all-notes';
import { Content } from './components/content/content';
import { SidebarRightMenu } from './components/sidebar-right-menu/sidebar-right-menu';
import { MenuBar } from './components/menu-bar/menu-bar';
import { Tags } from '../components/sidebar-navigation/components/tags/tags';
import { SettingsMenu } from './components/settings-menu/settings-menu';
import { ColorTheme } from './components/color-theme/color-theme';
import { FontTheme } from './components/font-theme/font-theme';
import { ChangePassword } from './components/change-password/change-password';

@Component({
  selector: 'app-notes',
  imports: [
    PageHeader,
    SidebarAllNotes,
    Content,
    SidebarRightMenu,
    MenuBar,
    Tags,
    SettingsMenu,
    ColorTheme,
    FontTheme,
    ChangePassword,
  ],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  constructor() {
    effect(() => {
      const _ = this.notes();
      this.note = undefined;
    });

    effect(() => {
      const sidebarNavigation = this.sidebarNavigationEvent();
      if (sidebarNavigation > 0) {
        this.showSettings = false;
        this.settingsPage = '$$SIDEBAR-NAVIGATION';
      }
    });
  }

  notes = input<INote[]>([]);
  allNotes = input<INote[]>([]);
  title = input<string>('');
  sidebarNavigationEvent = input<number>(0);

  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();
  saveNote = output<INote>();
  cancelNote = output<INote>();

  activeNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  searchNotesOutput = output<string>();
  taggedNotesOutput = output<string>();
  settingsOutput = output<void>();

  note?: INote;
  sectionToShow: string = '';
  showSearchBar: boolean = false;

  showSettings: boolean = false;
  settingsPage: string = '$$COLOR-THEME';
}
