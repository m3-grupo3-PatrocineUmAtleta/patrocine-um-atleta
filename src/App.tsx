import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { AthletePage } from "./pages/AthletePage";
import { AdmDash } from "./pages/AdmDash";
import { UserDash } from "./pages/UserDash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="admDash" element={<AdmDash />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="athletePage" element={<AthletePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
