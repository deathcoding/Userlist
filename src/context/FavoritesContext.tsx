import { createContext } from "react";
import type { IUser } from "../types";

interface IFavoritesContext {
  favorites: IUser[];
  toggleFavorite: (user: IUser) => void;
  editFavoriteUser: (
    id: number,
    name: string,
    email: string,
    phone: string,
  ) => void;
}

export const FavoritesContext = createContext<IFavoritesContext | null>(null);
