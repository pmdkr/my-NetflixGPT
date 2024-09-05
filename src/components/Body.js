import React from 'react'
import Login from './Login';
import Browse from './Browse';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
// import { useDispatch } from 'react-redux';

const Body = () => {
  // const dispatch = useDispatch();


  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login />,
      errorElement:<ErrorPage/>
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement:<ErrorPage/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )



}

export default Body