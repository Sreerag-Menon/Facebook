import "./App.css";
import Login from "./components/Login/Login";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
