import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from './admin'
import Button from './page/ui/button'
import NotFound from './page/nomatch'

export default class IRouter extends React.Component {
  render () {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Button}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Admin>
          } />
          <Route path="/order/detail" component={Login} />
        </App>
      </Router>
    )
  }
}