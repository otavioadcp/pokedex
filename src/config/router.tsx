import { createBrowserRouter } from "react-router-dom";
import PokemonListPage from "../pages/pokemonListPage";
import PokemonDetailsPage from "../pages/pokemonDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
    children: [],
  },
  {
    path: ":id",
    element: <PokemonDetailsPage />,
    children: [],
  },
]);
