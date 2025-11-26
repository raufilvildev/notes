import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  title = input<string>('');

  allNotesOutput = output<void>();
  searchNotesOutput = output<string>();

  onKeyDownEnter(search: string) {
    if (!search) {
      this.allNotesOutput.emit();
      return;
    }
    this.searchNotesOutput.emit(search);
  }
}
