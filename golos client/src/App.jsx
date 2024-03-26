import "./style/App.css";
import router from "./router";
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from "./views/Auth/Login2";
import InitialDataEntry from "./views/InitialDataEntry";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/initialdataentry"
            element={<ProtectedRoute children={<InitialDataEntry />} />}
          />
          <Route path="/login" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
