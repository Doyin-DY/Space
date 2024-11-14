import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';

export default function App() {
  function PageLayout() {  
    return (
      <>
        <Outlet/>
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/crew",
          element: <Crew />
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </div>
  ); 
};

