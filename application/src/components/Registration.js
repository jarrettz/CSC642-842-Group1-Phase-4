import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <div className='container'>
        <form>
        <h3>Register</h3>
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register 
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        </form>
      </div>
      
    )
  }
}