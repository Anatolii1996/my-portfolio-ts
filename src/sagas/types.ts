/* eslint-disable */
export interface ICommentData {
  name: string;
  surname: string;
  comment: string;
  isOwnerAuthor?: boolean; // Добавляем свойство isOwnerAuthor с возможностью отсутствия
}