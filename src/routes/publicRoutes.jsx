/* eslint-disable react/prop-types */
import {Route, Routes} from "react-router-dom";

// Components
import Login from "../pages/public/Login";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
  )
}

export default PrivateRoutes;