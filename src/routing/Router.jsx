import { createBrowserRouter } from "react-router-dom";
import { RootRoute } from "./routes/RootRoute";
import { FilmsRoute } from "./routes/FilmsRoute";
import { SeriesRoute } from "./routes/SeriesRoute";
import { Layout } from "../components/Layouts/Layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [RootRoute, FilmsRoute, SeriesRoute],
    },
  ],
  { basename: "/filminClon" }
);
