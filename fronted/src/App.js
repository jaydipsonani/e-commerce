import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Cart from './Component/Cart';
import { useState } from 'react';
import Navbar from './Component/Navbar';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Forgot } from './Component/Forgot';
import ProtectedRoute from './Component/ProtectedRoute';

function App() {

  const [query, setQuery] = useState('')

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navigate to="/login" />,
      index: true
    },
    {
      path: '/login',
      element: <><Login /></>,
    },
    {
      path: '/register',
      element: <Signup />,
    },
    {
      path: '/forget',
      element: <Forgot />,
    },
    {
      path: '*',
      element: <h1>This Route is not found for our site</h1>
    },
    {
       element: <ProtectedRoute />,
       children: [
        {
          path: '/Home',
          element: (<><Navbar query={query} setQuery={setQuery} /><Home query={query} setQuery={setQuery} /></>)
        },
        {
          path: '/about',
          element: (<><Navbar query={query} setQuery={setQuery} /><About /></>)
        },
        {
          path: '/service',
          element: (<><Navbar query={query} setQuery={setQuery} /><Service /></>)
        },
        {
          path: '/cart',
          element: (<><Navbar query={query} setQuery={setQuery} /><Cart /></>)
        }
       ]
    }
  ])

  return (
    <>
      <div className='App'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;


