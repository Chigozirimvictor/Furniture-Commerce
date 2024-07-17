import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return(
        <div className="loginsignup">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="password" />
                </div>
                <button>Continue</button>
                <p className="login-login">Already have an Account? <span>Login Here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, i agree to use the terms of use & privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup