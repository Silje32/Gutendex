import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TempContextProvider } from "./contex/tempContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
// Router components
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/details/:detailsId",
        element: <DetailsPage />,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 -page not found</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TempContextProvider>
      <RouterProvider router={router} />
    </TempContextProvider>
  </StrictMode>,
);
