import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path : '/',
        element: <Home></Home>
      },
      {
        path : 'add_coffee',
        element: <AddCoffee></AddCoffee>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
