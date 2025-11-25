export interface INote {
  uuid: string;
  title: string;
  content: string;
  tags: string[];
  updated_at: Date;
  status: 'active' | 'archived';
}
