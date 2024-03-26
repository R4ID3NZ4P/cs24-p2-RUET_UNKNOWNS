import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import AddVehicle from "../Pages/AddVehicle/AddVehicle";
import CreateSTS from "../Pages/CreateSTS/CreateSTS";

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
        },
        {
          path: "createSTS",
          element: <CreateSTS />
        }
    ]
    },
  ]);

export default router;