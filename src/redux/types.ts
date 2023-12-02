import { ObjectId } from "mongodb";


export interface IPage {
  value: number;
};

export interface ICountState {
  values: string[];
}

export interface ICurrentIP {
  value: string;
};

export interface IComment {
  ipAddress: string;
  date: string;
  creatingTime: string;
  name: string;
  surname: string;
  comment: string;
  _id: string;
}