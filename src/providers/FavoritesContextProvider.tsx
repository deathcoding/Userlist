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

  function editFavoriteUser(userToEdit: IUser) {
    setFavorites(
      favorites.map((favUser) =>
        favUser.id === userToEdit.id ? userToEdit : favUser,
      ),
    );
  }

  function createFavoriteUser(userData: IUser) {
    setFavorites((prevFav) => {
      return [...prevFav, userData];
    });
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        editFavoriteUser,
        createFavoriteUser,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
