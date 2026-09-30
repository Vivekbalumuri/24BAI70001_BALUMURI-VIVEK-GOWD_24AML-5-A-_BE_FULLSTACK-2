import { useState } from "react";
import { generateToken, saveToken } from "../utils/auth";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple demo credentials
    if (username === "admin" && password === "12345") {
      const token = generateToken(101, "admin");

      saveToken(token);

      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>JWT Login</h1>
        <p>Login to access the Dashboard</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        {error && <p className="error">{error}</p>}

        <div className="demo">
          <p><b>Demo Credentials</b></p>
          <p>Username: admin</p>
          <p>Password: 12345</p>
        </div>

      </div>
    </div>
  );
}

export default Login;