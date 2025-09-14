import { createContext } from "react";
import type { CreateUser, EditUser, IUser } from "../types";

interface IFavoritesContext {
  favorites: IUser[];
  toggleFavorite: (user: IUser) => void;
  editFavoriteUser: EditUser;
  createFavoriteUser: CreateUser;
}

export const FavoritesContext = createContext<IFavoritesContext | null>(null);
