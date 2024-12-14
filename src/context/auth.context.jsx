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
  
  const initialAuthState = () =>{
    const accessToken = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    if(accessToken && user ){
      return{
        isAuthenticated: true,
        user: JSON.parse(user),
      }

    }else{
      return{
        isAuthenticated: false,
        user: {
          id: "",
          email: "",
          role: '',
        },
      }
    }
  }
  const [auth, setAuth] = useState(initialAuthState);

  // const [appLoading, setAppLoading] = useState(false);
  
  const login = async (email, password) => {
    try {
      const response = await handleLogin(email, password);

      localStorage.setItem("accessToken", response.accessToken);

      localStorage.setItem("user", JSON.stringify(response.user));
      console.log(response);
      setAuth({
        isAuthenticated: true,
        user: response.user
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
        localStorage.removeItem("user");
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
