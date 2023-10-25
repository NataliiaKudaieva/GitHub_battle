import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Popular from "./pages/Popular/Popular";
import Battle from "./pages/Battle/Battle";
import Nav from "./Nav";
import "./App.css";
import Results from "./pages/Battle/Results";
import Error from "./components/Error";
import { GitHubProvider } from "./contexts/GitHubContext";

import RepoDetails from "./pages/Popular/RepoDetails";
import ProfileDetails from "./pages/Battle/ProfileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "popular",
        element: <Popular />,
        errorElement: <Error />,
      },
      {
        path: "popular/:repoID",
        element: <ProfileDetails />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "battle/results",
        element: <Results />,
      },
      {
        path: "battle/error",
        element: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GitHubProvider>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </GitHubProvider>
  );
};

export default App;
