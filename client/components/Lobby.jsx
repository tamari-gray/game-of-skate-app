import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from './Firestore'

export default class Lobby extends Component {
  state = {
    gameId: '',
    games: []
  }

  gamesList = gamesArr => {
    this.setState({
      games: gamesArr
    })
  }

  //how to set the state after snapshot from firebase????

  componentDidMount(){
    const db = firebase.firestore()

    db.collection('games').onSnapshot(function(querySnapshot) {
      const gamesDb = querySnapshot.docs.map( game => {
        return {game:game.data(), id: game.id}
      })
      // this.setState({
      //   games: gamesDb
      // })
      this.gamesList(gamesDb)
      console.log('got games',pls)
    })

    console.log('state games',this.state.games)
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
