import { FavoritesContext } from "../context/FavoritesContext";
import useLocalStorage from "../hooks/useLocalStorage";
import type { IUser } from "../types";

interface IFavoritesProviderProps {
  children: React.ReactNode;
}

export function FavoritesProvider({ children }: IFavoritesProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<IUser[]>(
    "favoriteUsers",
    [],
  );

  function toggleFavorite(user: IUser) {
    const isFavorite = favorites.some((favUser) => favUser.id === user.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favUser) => favUser.id !== user.id));
    } else {
      setFavorites([...favorites, user]);
    }
  }

  function editFavoriteUser(
    id: number,
    name: string,
    email: string,
    phone: string,
  ) {
    setFavorites(
      favorites.map((favUser) => {
        if (favUser.id === id) {
          return { ...favUser, name, email, phone };
        } else {
          return favUser;
        }
      }),
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, editFavoriteUser }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
