// Generate a simulated JWT token
export const generateToken = (userId, role) => {
  const payload = {
    userId: userId,
    role: role,
    loginTime: new Date().toISOString()
  };

  // Simulate JWT by encoding the payload
  const token = btoa(JSON.stringify(payload));

  return token;
};

// Store token
export const saveToken = (token) => {
  localStorage.setItem("jwtToken", token);
};

// Get token
export const getToken = () => {
  return localStorage.getItem("jwtToken");
};

// Decode token
export const getUserFromToken = () => {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(token));
    return payload;
  } catch (error) {
    return null;
  }
};

// Remove token
export const logout = () => {
  localStorage.removeItem("jwtToken");
};