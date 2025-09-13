import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function useFavorites() {
  const context = useContext(FavoritesContext);

  if (context === null) {
    throw new Error("Custom hook useFavorites used without FavoritesProvider.");
  }

  return context;
}
