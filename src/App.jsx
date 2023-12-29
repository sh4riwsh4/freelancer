import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Job from "./pages/job/Job";
import Jobs from "./pages/jobs/Jobs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import MyJobs from "./pages/myJobs/MyJobs";
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import './App.scss'


import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";

function App() {

    const Layout = () => {
        return (
            <div className="app">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }
 
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children:[
            {
            path:"/",
            element:<Home/>
            },
            {
                path:"/job/:id",
                element:<Job/>
            },
            {
                path:"/jobs",
                element:<Jobs/>
            },
            {
                path:"/Orders",
                element:<Orders/>
            },
            {
                path:"/myJobs",
                element:<MyJobs/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/messages",
                element:<Messages/>
            },
            {
                path:"/message/:id",
                element:<Message/>
            }
        ]
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
      ]);
    

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )

}

export default App