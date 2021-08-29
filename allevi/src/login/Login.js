import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';
const axios = require('axios');

let LoginForm = () => {
    const { setUserData } = useContext(AppContext)
    const [loginData, setLoginData] = useState({ })

    const postLogin = (evt) => {
        evt.preventDefault();

        axios.post('https://us-central1-allevi-cloud-dev.cloudfunctions.net/authenticate', loginData)
            .then(res => {
                console.log(res)
                setUserData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form >
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                />
            </label>
            <button onClick={postLogin}>Log In</button>
        </form>
    )
}

let Login = () => (
    <div>
        <h3>Login</h3>
        <LoginForm />
    </div>
)

export default Login;