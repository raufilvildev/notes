import { Component, effect, input, output } from '@angular/core';
import { INote } from '../../../../../interfaces/i-note';
import { DatePipe } from '@angular/common';
import { PageHeaderControl } from './components/page-header-control/page-header-control';

@Component({
  selector: 'app-content',
  imports: [DatePipe, PageHeaderControl],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  constructor() {
    effect(() => {
      this.noteValue = this.note();
      this.textInputTitle = this.noteValue?.title || '';
      this.textInputTags = (this.noteValue?.tags || []).join(', ');
      this.textArea = this.noteValue?.content || '';
    });
  }

  note = input<INote>();
  noteValue?: INote;

  returnSidebarAllNotes = output<void>();
  archiveNote = output<INote>();
  restoreNote = output<INote>();
  deleteNote = output<INote>();
  saveNote = output<INote>();

  textInputTitle: string = '';
  textInputTags: string = '';
  textArea: string = '';

  onTextInputTitle(event: Event) {
    this.textInputTitle = (event.target as HTMLInputElement).value;
  }

  onTextInputTags(event: Event) {
    this.textInputTags = (event.target as HTMLInputElement).value;
  }

  onTextAreaInput(event: Event) {
    this.textArea = (event.target as HTMLTextAreaElement).value;
  }

  onSave() {
    const note: INote = {
      uuid: this.noteValue?.uuid || '',
      title: this.textInputTitle,
      content: this.textArea || '',
      tags: this.textInputTags.replaceAll(' ', '').split(','),
      updated_at: new Date(),
      status: this.noteValue?.status || 'active',
    };

    this.saveNote.emit(note);
  }

  onCancel() {
    this.textInputTitle = this.noteValue?.title || '';
    this.textInputTags = (this.noteValue?.tags || []).join(', ');
    this.textArea = this.noteValue?.content || '';
  }
}
