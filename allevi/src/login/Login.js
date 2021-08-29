import React, { useState } from 'react';
const axios = require('axios');

let LoginForm = () => {
    const [loginData, setLoginData] = useState({ })

    const postLogin = (evt) => {
        evt.preventDefault();
        
        axios.post('https://us-central1-allevi-cloud-dev.cloudfunctions.net/authenticate', loginData)
            .then(res => {
                console.log(res)
                alert(res.data.token)
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