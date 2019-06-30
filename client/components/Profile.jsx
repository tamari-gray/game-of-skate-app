import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
        this is {this.props.match.params.userName}'s profile

        <div>
          <Link to={`/${this.props.match.params.userName}/lobby`}>
          <button>Play game</button>
          </Link>
          
        </div>
      </div>
    )
  }
}
