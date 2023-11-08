import { ObjectId } from "mongodb";




export interface IComment {
  ipAddress: string;
  date: string;
  creatingTime: string;
  name: string;
  surname: string;
  comment: string;
  _id: ObjectId;
}