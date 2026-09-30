import { getToken } from "../utils/auth";

function ProtectedRoute({ children }) {

  const token = getToken();

  if (!token) {
    return null;
  }

  return children;
}

export default ProtectedRoute;