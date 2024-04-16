import "./style/App.css";
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from "./views/Auth/Login2";
import InitialDataEntry from "./views/InitialDataEntry";
import ProtectedRoute from "./router/ProtectedRoute";
import Approval from "./views/Approval";
import Home from "./views/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute children={<Home />} />} />
          <Route
            path="/initialdataentry"
            element={<ProtectedRoute children={<InitialDataEntry />} />}
          />
          <Route
            path="/approvedreject"
            element={<ProtectedRoute children={<Approval />} />}
          />
          <Route path="/login" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
