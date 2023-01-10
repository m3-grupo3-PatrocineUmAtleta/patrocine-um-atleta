import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { AthletePage } from "./pages/AthletePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="athletePage" element={<AthletePage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
