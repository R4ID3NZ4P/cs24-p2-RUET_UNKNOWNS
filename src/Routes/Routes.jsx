import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import AddVehicle from "../Pages/AddVehicle/AddVehicle";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/",
          element: <h2>Helo worl</h2>
        },
        {
          path: "/addVehicles",
          element: <AddVehicle />
        }
    ]
    },
  ]);

export default router;