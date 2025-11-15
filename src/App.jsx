import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MoreAbout from "./pages/MoreAbout"
import { Projects } from "./pages/Projects";
import  Contact from "./pages/Contact";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/NotFound",
      element: <NotFound />,
    },
    {
      path: "/MoreAbout",
      element: <MoreAbout />,
    },
    {
      path: "/Projects",
      element: <Projects/>
    },
    {
  path: "/contact",
  element: <Contact/>
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
