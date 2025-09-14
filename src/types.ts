export interface IUser {
  id: number | string;
  name: string;
  email: string;
  phone: string;
}

export type UserAction = (user: IUser) => void;

export interface FormData {
  id: string | number;
  name: string;
  email: string;
  phone: string;
}
