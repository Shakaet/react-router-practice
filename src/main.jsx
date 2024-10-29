import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header';
import Todos from './Components/Todos';
import SingleTodo from './Components/SingleTodo';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/todos",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/todos"),
        element:<Todos></Todos>,
      },
      {
        path: "/todos/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`),
        element:<SingleTodo></SingleTodo>,
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
