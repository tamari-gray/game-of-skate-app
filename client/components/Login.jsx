import React, { Component } from 'react'
import firestore from './Firestore'

export default class Login extends Component {
  state = {
    userName: ''
  }

  handleLogin = e => {
    e.preventDefault()
    //post to firebase

  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form action={this.handleLogin} method="post">
          <p>Enter Username</p>
          <input type="text" onChange={this.handleInput} name="userName" placeholder="username" id=""/>
          <button type="submit">Login</button>
        </form>
      </>
    )
  }
}
