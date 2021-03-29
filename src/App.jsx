import React from 'react'
import Home from './containers/home'
import Stats from './containers/Stats'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/stats' component={Stats} />
      </Switch>
    </div>
  )
}

export default App
