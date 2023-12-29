export interface IPage {
  value: number;
}

export interface ICountState {
  values: string[];
}

export interface ICurrentIP {
  value: string;
}

export interface IMessage {
  name: string;
  surname: string;
  comment: string;
  _id: string;
}

export interface IComment extends IMessage {
  ipAddress?: string;
  date?: string;
  creatingTime?: string;
}
export interface ICommentStatee {
  messages: IComment[];
  errors: string;
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
