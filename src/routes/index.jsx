import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
//import { useAuth } from "../context/AuthContext";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  //const auth = useAuth();

  return (
        <Routes>
            <Route path="*" element={<PublicRoutes />} />
            <Route path="/admin/*" element={<PrivateRoutes />} />
        </Routes>
    );
};

export default AppRouter;
