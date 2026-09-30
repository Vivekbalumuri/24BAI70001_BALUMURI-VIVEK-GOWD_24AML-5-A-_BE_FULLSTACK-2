import { getUserFromToken, logout } from "../utils/auth";

function Dashboard({ onLogout }) {

  const user = getUserFromToken();

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className="dashboard">

      <nav>
        <h2>JWT Authentication</h2>

        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="dashboard-content">

        <h1>Welcome to Dashboard 🎉</h1>

        {user && (
          <div className="user-card">

            <h2>User Information</h2>

            <p>
              <strong>User ID:</strong> {user.userId}
            </p>

            <p>
              <strong>Role:</strong>{" "}
              <span className="role">
                {user.role}
              </span>
            </p>

            <p>
              <strong>Login Time:</strong> {user.loginTime}
            </p>

          </div>
        )}

        <div className="protected-message">
          🔒 This is a protected Dashboard.
          <br />
          Only authenticated users can access it.
        </div>

      </div>

    </div>
  );
}

export default Dashboard;