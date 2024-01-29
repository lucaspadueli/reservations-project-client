import { createContext, useState, useEffect, useCallback } from "react";
import api from "../../api/api";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  function saveToken(token) {
    localStorage.setItem("token", token);
  }
  const retrieveToken = () => {
    return localStorage.getItem("token");
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  const authenticateUser = useCallback(async () => {
    const storedToken = retrieveToken();
    if (!storedToken) {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      return;
    }
    try {
      const user = await api.verify(storedToken);
      setIsLoggedIn(true);
      setIsLoading(false);
      setUser(user);
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }, []);
  const logoutUser = () => {
    removeToken();
    authenticateUser();
  };
  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        saveToken,
        authenticateUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };

AuthProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
