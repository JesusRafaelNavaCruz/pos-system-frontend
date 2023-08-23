import {Route, Routes} from "react-router-dom";
import Login from '../pages/public/Login';

function PublicRoutes() {
  return (
    <Routes>
        <Route path="/" exact element={ <Login /> } />
    </Routes>
  )
}

export default PublicRoutes;
