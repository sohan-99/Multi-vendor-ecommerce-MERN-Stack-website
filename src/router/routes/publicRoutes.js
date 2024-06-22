import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default publicRoutes;
