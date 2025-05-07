import { HomePage } from "../../pages/HomePage/HomePage";
import { moviesLoader } from "../loaders/moviesLoader";

export const RootRoute = {
  path: "/",
  element: <HomePage />,
  loader: moviesLoader
};
