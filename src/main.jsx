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
import UpdateCoffee from './components/UpdateCoffee';
import ViewCoffee from './components/ViewCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path : '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/coffee')

      },
      {
        path : 'add_coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path : 'update_coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path : 'view_coffee/:id',
        element: <ViewCoffee></ViewCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
