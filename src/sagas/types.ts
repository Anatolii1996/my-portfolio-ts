/* eslint-disable */
export interface ICommentData {
  name: string;
  surname: string;
  comment: string;
  isOwnerAuthor?: boolean;
  userId: string // Добавляем свойство isOwnerAuthor с возможностью отсутствия
}