import { Component, input } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [DatePipe],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  note = input<INote | undefined>(undefined);
}
