import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import EditorWrapper from './EditorWrapper.jsx'
import Home from './Home.jsx'
import { useSelector } from 'react-redux'

export default function App(){
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return(
    <BrowserRouter>
        {isLoggedIn
          ?
          <Switch>
            <Route exact path = '/editor' component = {EditorWrapper}/>
            <Redirect to = '/editor'/>
          </Switch>
          :
          <Switch>
            <Route exact path = '/home' component = {Home}/>
            <Redirect to = '/home'/>
          </Switch>
        }
    </BrowserRouter>
  )
}
