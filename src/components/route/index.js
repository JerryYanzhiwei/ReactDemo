import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Button from '../button'
import Form from '../form'

export default class routerMap extends React.Component {
  
  render () {
    console.log('route')
    return (
      <Switch>
        <Route path="/home" component={Button}></Route>
        <Route path="/form" component={Form}></Route>
      </Switch>
    )
  }
}