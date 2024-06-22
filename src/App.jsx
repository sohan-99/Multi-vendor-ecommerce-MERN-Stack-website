/* eslint-disable no-unused-vars */
import { useState } from "react";
import Router from "./router/routes/Router";
import publicRoutes from "./router/routes/publicRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  console.log(allRoutes);
  console.log(allRoutes.length);

  return <Router allRoutes={allRoutes} />;
}

export default App;
