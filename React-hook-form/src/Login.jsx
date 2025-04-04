import { useState } from "react"
import './App.css'


function Login() {

    const [isLogin, setIsLogin] = useState(true);



    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign up</button>
                </div>
                {isLogin ? <>

                    <div className="form">
                        <h2>Login Form</h2>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot Password</a>
                        <button>Login</button>
                        <p>Not a member <a href="#" onClick={() => setIsLogin(false)}>Sign up</a></p>
                    </div>
                </> :
                    <>

                        <div className="form">
                            <h2>Sign up Form</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button>Sign up</button>
                            <p>Already a memeber<a href="#" onClick={() => setIsLogin(true)}> Sign In</a></p>
                        </div>

                    </>}
            </div>
        </div>
    )
}

export default Login