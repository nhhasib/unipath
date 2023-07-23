import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Pages/Home/Home.jsx';
import Colleges from './component/Pages/Colleges/Colleges.jsx';
import Admission from './component/Pages/Admission/Admission.jsx';
import MyColleges from './component/Pages/MyColleges/MyColleges.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/colleges',
          element:<Colleges></Colleges>
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/my-colleges',
          element:<MyColleges></MyColleges>
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
