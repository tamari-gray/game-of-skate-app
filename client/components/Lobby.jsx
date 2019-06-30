import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from './Firestore'

export default class Lobby extends Component {
  state = {
    gameId: '',
    games: []
  }

  componentDidMount(){
    const db = firebase.firestore()

    db.collection('games').onSnapshot(function(querySnapshot) {
      const games = []
      querySnapshot.forEach( game => games.push({game:game.data(), id: game.id}))
      this.gamesList(games)
    })
  }

  gamesList = (gamesArr) => {
    this.setState({
      games: gamesArr
    })
  }


  render() {
    return (
      <div>
        <div>
          {
            this.state.games.map(game => {
              return <Link to={'/game/' + game.id}></Link>
            })
          }
        </div>

        <div>
          <Link to={'/game/' + this.state.gameId}>
            <button>Start new game</button>
          </Link>          
        </div>
      </div>
    )
  }
}
