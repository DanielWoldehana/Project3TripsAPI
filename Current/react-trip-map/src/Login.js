import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import fire from "./config/fire";
import "./login.css";

//MAKE INSTRUCTIONS CLEAR

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
        console.log("correct");
      })
      .catch(err => {
        alert("Please enter correct account information")
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
        alert("Please enter email and password before hitting \"Signup\". Email Address must follow @site.com format and password must be at least 6 characters")
      });
  };
  render() {
    // if (redirect1 == true) return <Redirect to="/map" />;
    return (
      <div>
        <form className="formContainer2">
          <div className="emailContainer">
            <div className="loginHeader">
              <h1 className='top'>Sign in to Your Account</h1>
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
            <span className="passwordLabel">Password: </span>
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
