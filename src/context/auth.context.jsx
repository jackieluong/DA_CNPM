import { createContext, useContext, useState } from "react";
import { handleLogin } from "../services/userService";


export const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    id: "",
    email: "",
    role: '',
  },
});

export const AuthWrapper = ({ children }) => {
    
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {
      id: "",
      email: "",
      role: '',
    },
  });

  // const [appLoading, setAppLoading] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await handleLogin(email, password);

      localStorage.setItem("accessToken", response.accessToken);

      setAuth({
        isAuthenticated: true,
        user: {
          id: response.user.id,
          email: response.user.email,
          role: response.user.role
        },
      });

      alert(response.message);
      
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const logout = async () => {
    try {
        localStorage.removeItem("accessToken");
        setAuth({
            isAuthenticated: false,
            user: {
                id: "",
                email: "",
                role: '',
            },
        })
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
