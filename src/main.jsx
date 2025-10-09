import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Home from './compenents/home.jsx'
import About from './compenents/about.jsx'
import Contact from './compenents/contact.jsx'
import Blog from './compenents/blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
    {
    path: "about",
    element: <About/>
  },
    {
    path: "contact",
    element: <Contact/>
  },
    {
    path: "blog",
    element: <Blog/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
  <RouterProvider router={router} />
        </StyledEngineProvider>
  </StrictMode>,
)
