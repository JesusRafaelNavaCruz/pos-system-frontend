/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Components
import Dashboard from "../pages/private/Dashboard";
import Users from "../pages/private/management/Users";
import Tables from "../pages/private/management/Tables";

//Layout
import AdminLayout from "../layout/index";

const PrivateRoutes = () => {
  const auth = useAuth();
  return (
    auth && (
      <AdminLayout>
        <Routes>
          <Route path="/dashboard" exact="true" element={<Dashboard />} />
          <Route path="/users" exact="true" element={<Users />} />
          <Route path="/tables" exact="true" element={<Tables />} />
        </Routes>
      </AdminLayout>
    )
  );
};

export default PrivateRoutes;
