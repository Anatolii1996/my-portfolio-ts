import { ObjectId } from "mongodb";

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
}

export interface IComment extends IMessage {
  ipAddress?: string;
  date?: string;
  creatingTime?: string;
  _id?: ObjectId;
}
export interface ICommentStatee  {
  messages: IComment[],
  errors: string
}

export interface CreateCommentAction {
  type: string;
  payload: {
    name: string;
    surname: string;
    comment: string;
    
  };
}
