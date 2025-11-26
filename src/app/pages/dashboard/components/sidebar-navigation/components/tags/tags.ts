import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags {
  tags = input<string[]>([]);
  tagSelected = input<string>('');

  taggedNotesOutput = output<string>();
}
