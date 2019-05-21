import React, { Component } from "react";
// import { Link } from "react-router-dom";
import fire from './config/fire';
import "./login.css";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    login = e => {
        e.preventDefault();
        fire
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
                console.log(u);
            })
            .catch(err => {
                console.error(err);
            });
    };

    signup = e => {
        e.preventDefault();
        fire
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
                console.log(u);
            })
            .catch(err => {
                console.error(err);
            });
    };
    render() {
        return (
            <div>
                <form className="formContainer">
                    <div className="emailContainer">
                        <div>
                            <h1>Log In</h1>
                        </div>
                        <span className="emailLabel">Email Address:</span>
                        <input
                            className="emailInput"
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="passwordContainer">
                        <label className="passwordLabel" htmlFor="exampleInputPassword1">
                            password:{" "}
                        </label>
                        <input
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="buttonContainer">
                        <button className="login" type="submit" onClick={this.login}>
                            Login
            </button>
                        <button className="signUp" onClick={this.signup}>
                            Signup
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;