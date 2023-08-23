import {Route, Routes} from "react-router-dom";
import Dashboard from '../pages/private/Dashboard';

function PrivateRoutes() {
  return (
    <Routes>
        <Route path="/app" exact element={ <Dashboard /> } />
    </Routes>
  )
}

export default PrivateRoutes;