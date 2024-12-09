import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        id: "",
        email: "",
        
    }
});


export const AuthWrapper = ({children}) =>{
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
        id: "",
        email: "",
        }
    });

    const [appLoading, setAppLoading] = useState(false);
    return <AuthContext.Provider value={{
        auth, setAuth, appLoading, setAppLoading
    }} >
        {children}
    </AuthContext.Provider>
}


