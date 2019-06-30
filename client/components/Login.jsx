import React, { Component } from 'react'
import firebase from './Firestore'
import { Link, Redirect } from 'react-router-dom'

export default class Login extends Component {
  state = {
    userName: '',
    redirect: false
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({
      redirect: true
    })

    //post to firebase
    const db = firebase.firestore();
    db.collection('players').add({
      name: this.state.userName
    })

    // this.setState({
    //   redirect: false,
    //   userName:''
    // })
    

    
  }


  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/player/' + this.state.userName}/>
    }
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin} >
          <p>Enter Username</p>
          <input 
            type="text" 
            onChange={this.handleInput} 
            name="userName" 
            placeholder="username" 
            value={this.state.userName}/>
            <button type="submit">Login</button>
        </form>
      </>
    )
  }
}
