export interface Emotion {
  name?: string;
  emotion?: string;
  imageLink: string;
  description?: string;
  note?: any;
  user?: any;
  createdAt?: Date;
  updatedAt?: Date;
  history?: Emotion[];
}
