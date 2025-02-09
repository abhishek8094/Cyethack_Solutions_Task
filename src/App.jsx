import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import PublicRoute from "./Routes/PublicRoute"
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./pages/Home";
import Dashboard from "./Components/Dashboard";
import List from "./pages/List";
import ListDetails from "./pages/ListDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<PublicRoute element={<Home />} />
  },

  {
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />}/>,
  },

  {
    path: "/list",
    element:<List />,
  },
  
  {
    path: "/list/details",
    element: <ListDetails/>,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
