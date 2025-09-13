import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";
import { FavoritesProvider } from "./providers/FavoritesContextProvider";

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
