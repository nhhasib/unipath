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
import CollegeDetails from './component/Pages/CollegeDetails/CollegeDetails.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import Login from './component/Pages/Login/Login.jsx';
import Register from './component/Pages/Register/Register.jsx';
import Error from './component/Pages/Error/Error.jsx';


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
        },
        {
          path: "/colleges/:id",
          element: <CollegeDetails></CollegeDetails>,
          loader:({params})=>fetch(`https://unipath-server.vercel.app/colleges/${params.id}`)
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ]
  },
  {
    path: '*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
