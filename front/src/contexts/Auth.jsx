import { createContext, useState } from "react";
import Axios from "../config/axios";
import { API_BASE_URL } from "../vite-env.d";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const isToken = localStorage.getItem('token') || false
    const isUser = JSON.parse(localStorage.getItem('user')) || false
    const [auth, setAuth] = useState(isToken)
    const [user, setUser] = useState(isUser)
    const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('user'))?.role?.description === 'Admin' || false)
    
    const login = async (token) => {
        localStorage.setItem('token', token)
        const response = await Axios.get(API_BASE_URL+'/auth/profile')
        localStorage.setItem('user', JSON.stringify(response.data))
        setAuth(true)
        setIsAdmin(response.data?.role?.description === 'Admin' || false)
        setUser(response.data)
    }
    
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setAuth(false)
        setIsAdmin(false)
        setUser({})
    }
    
    return (
        <AuthContext.Provider value={{ auth, user, isAdmin, login, logout }}>
        {children}
        </AuthContext.Provider>
    )
}

