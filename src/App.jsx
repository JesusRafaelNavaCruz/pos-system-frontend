import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
