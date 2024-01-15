/* eslint-disable */
export interface FormValues {
    name: string;
    surname: string;
    comment: string;
    _id: string;
  }
  
  export interface ErrorValues {
    name: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
    surname: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
    comment: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
  }