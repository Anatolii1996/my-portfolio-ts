/* eslint-disable */
export interface IPage {
  value: number;
}



export interface IOwnState {
  value: boolean;
}

export interface ICurrentOwner {
  isOwner: IOwnState;
}

export interface INewUserState {
  isNewUser:IOwnState
}

export interface ICountUsers {
  value: number;
}

export interface ICurrentCountUsers {
  countUsers:ICountUsers
}

export interface IMessage {
  name: string;
  surname: string;
  comment: string;
  _id: string;
  isOwnerAuthor?: boolean;
}

export interface IComment extends IMessage {
  
  date?: string;
  creatingTime?: string;
}
export interface ICommentStatee {
  messages: IComment[];
  errors: string;
  isNewMessage: boolean;
}

export interface CreateCommentAction {
  type: string;
  payload: IMessage;
}
export interface BlockUserAction {
  type: string;
  payload: IComment;
}

export interface DeleteCommentAction {
  type: string;
  payload: string;
}

export interface IBlockedUser {
  values: IComment[];
  isBlocked: boolean;
}
