import { createContext } from "react";
import type { UserAction, IUser } from "../types";

interface IFavoritesContext {
  favorites: IUser[];
  toggleFavorite: (user: IUser) => void;
  editFavoriteUser: UserAction;
  createFavoriteUser: UserAction;
}

export const FavoritesContext = createContext<IFavoritesContext | null>(null);
