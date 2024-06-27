import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));
const  Adminlogin= lazy(() => import('./../../views/auth/Adminlogin'));
const Home = lazy(() => import("../../Home.jsx"));
const publicRoutes = [

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <Adminlogin />,
  },
];

export default publicRoutes;
