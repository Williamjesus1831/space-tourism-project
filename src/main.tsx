import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './routes/Home.tsx';
import Crew from './routes/Crew.tsx';
import Destination from './routes/Destination.tsx';
import Technology from './routes/Technology.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "destination",
    element: <Destination />
  },
  {
    path: "crew",
    element: <Crew />
  },
  {
    path: "technology",
    element: <Technology />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
