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
      const activeEvent = this.activeEvent();

      if (activeEvent > 0) {
        this.selectedTag = '$$HOME';
        return;
      }
    });

    effect(() => {
      const archiveEvent = this.archiveEvent();

      if (archiveEvent > 0) {
        this.selectedTag = '$$ARCHIVE';
        return;
      }
    });

    effect(() => {
      const searchEvent = this.searchEvent();

      if (searchEvent > 0) {
        this.selectedTag = '$$SEARCH';
        return;
      }
    });
  }

  tags = input<string[]>();
  activeEvent = input<number>(0);
  archiveEvent = input<number>(0);
  searchEvent = input<number>(0);

  activeNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  taggedNotesOutput = output<string>();

  selectedTag: string = '$$HOME';
}
