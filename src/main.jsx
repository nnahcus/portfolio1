import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Home from "./compenents/home.jsx";
import About from "./compenents/about.jsx";
import Contact from "./compenents/contact.jsx";
import Project from "./compenents/project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Project", element: <Project /> },
    ],
  },
]);

function Layout(){
    return (
    <>
        <App/>
    </>
    )
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
);
