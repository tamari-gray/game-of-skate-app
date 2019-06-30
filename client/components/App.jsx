import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'
import Profile from './Profile'
import Lobby from './Lobby'
import Game from './Game'
const App = () => {
  return (
    <>
      <Route exact path="/" render={() => 
        <Login/>
      }/>
      <Route exact path="/player/:userName" render={({match}) => 
        <Profile match={match}/>
      }/>
      <Route exact path="/player/:userName/lobby" render={({match}) => 
        <Lobby match={match}/>
      }/>

      <Route exact path="/game/:gameId"  render={({match}) => 
        <Game match={match}/>
      }/>


    </>
  )
}

export default App
