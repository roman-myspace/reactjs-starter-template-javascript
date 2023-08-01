
import React from 'react'
import { useRoutes } from "react-router-dom";

import AppLayout from "../layout/AppLayout"
import AdminLayout from "../layout/AdminLayout";
import BlankLayout from '../layout/BlankLayout';

import Dashboard from "../pages/admin/dashboard";
import Home from '../pages/Home';
import Login from '../pages/login';



export default function Routes() {

    /*
       ************ Current URL Path Finder *******************
       const location = useLocation();
       const currentPath = location.pathname;    
   */

    let routes = useRoutes([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { index: true, element: <Home /> }
            ]
        },
        {
            path: "/",
            element: <BlankLayout />,
            children: [
                { path: 'login', element: <Login /> }
            ]
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                { index: true, element: <Dashboard /> },
            ]
        }
    ]);

    return routes;
}
