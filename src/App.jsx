import { useState } from "react";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { getToken } from "./utils/auth";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    getToken() !== null
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>

      {!isLoggedIn ? (

        <Login onLogin={handleLogin} />

      ) : (

        <ProtectedRoute>

          <Dashboard onLogout={handleLogout} />

        </ProtectedRoute>

      )}

    </div>
  );
}

export default App;