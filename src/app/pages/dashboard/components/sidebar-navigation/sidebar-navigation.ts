import { ChangeDetectorRef, Component, input, output, SimpleChanges } from '@angular/core';
import { Tags } from './components/tags/tags';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [Tags],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.css',
})
export class SidebarNavigation {
  constructor(private cd: ChangeDetectorRef) {}

  tags = input<string[]>();
  allNotesInput = input<boolean>(true);
  searchNotesInput = input<boolean>(false);

  allNotesOutput = output<void>();
  archivedNotesOutput = output<void>();
  taggedNotesOutput = output<string>();

  allNotes: boolean = true;
  archivedNotes: boolean = false;
  tagSelected: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['allNotesInput'].currentValue) {
      this.allNotes = true;
      this.archivedNotes = false;
      this.tagSelected = '';
      this.cd.detectChanges();
      return;
    }

    if (changes['searchNotesInput'].currentValue) {
      this.allNotes = false;
      this.archivedNotes = false;
      this.tagSelected = '';
      this.cd.detectChanges();
      return;
    }
  }
}
