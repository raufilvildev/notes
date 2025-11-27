import { Component, input, output } from '@angular/core';
import { INote } from '../../../../../../interfaces/i-note';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags {
  tags = input<string[]>([]);
  selectedTag = input<string>('');
  notes = input<INote[]>([]);

  taggedNotesOutput = output<string>();

  ngOnInit() {
    if (this.tags().length === 0) {
      this.notes().forEach((note) => {
        const noteTags = note.tags;
        noteTags.forEach((tag) => {
          if (!this.tags().includes(tag)) this.tags().push(tag);
        });
      });
    }
  }
}
