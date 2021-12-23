import React, {useContext} from 'react'
import {AppContext} from './UseContext'
const Login = () => {
    const { setUserName, userName } = useContext(AppContext) 
    console.log(userName)
    return (
        <div>
            <input value={userName} onChange= {(e) => {setUserName(e.target.value)}}/>
        </div>
    )
}

export default Login
