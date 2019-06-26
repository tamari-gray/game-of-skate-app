import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'

const App = () => {
  return (
    <>
      <Route path="/" render={() => 
        <Login/>
      }/>

      
    </>
  )
}

export default App
