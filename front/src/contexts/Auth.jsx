import { createContext, useState } from "react";
import Axios from "../config/axios";
import { API_BASE_URL } from "../vite-env.d";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const isToken = localStorage.getItem('token') || false
    const [auth, setAuth] = useState(isToken)
    const [user, setUser] = useState({})
    
    const login = async (token) => {
        localStorage.setItem('token', token)
        const response = await Axios.get(API_BASE_URL+'/users/profile')
        setAuth(true)
        setUser(response.data)
    }
    
    const logout = () => {
        setAuth(false)
        setUser({})
    }
    
    return (
        <AuthContext.Provider value={{ auth, user, login, logout }}>
        {children}
        </AuthContext.Provider>
    )
}

