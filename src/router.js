import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from './admin'
import Button from './page/ui/button'
import Modal from './page/ui/modal'
import Loading from './page/ui/loading'
import Notice from './page/ui/notice'
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
                <Route path="/admin/ui/modals" component={Modal}></Route>
                <Route path="/admin/ui/loadings" component={Loading}></Route>
                <Route path="/admin/ui/notification" component={Notice}></Route>
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