import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'
export const AppContext = createContext(null)
const UseContext = () => {
    const [userName, setUserName] = useState('apoorva')
    return (
        <div>
            <AppContext.Provider value={{userName, setUserName}}>
                <User></User>
                <Login></Login>
                
            </AppContext.Provider>
        </div>
        
    )
}

export default UseContext
