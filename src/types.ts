export interface IUser {
  id: number | string;
  name: string;
  email: string;
  phone: string;
}

export type EditUser = (user: IUser) => void;
export type CreateUser = (user: IUser) => void;

export interface FormData {
  id: string | number;
  name: string;
  email: string;
  phone: string;
}
