import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './main'
import About from './about'
import Info from './info'
import Topics from './../route1/topics'
import NoMatch from './nomatch'
import Home from './home'
import First from './first'
export default class IRoute extends React.Component {
  render () {
    return (
      <Router>
        <Home>
          <Switch>
            <Route exact path="/" component={First}></Route>
            <Route path='/main' render={ () =>
              <Main>
                <Route path='/main/:mainId' component={Info}></Route>
              </Main>
            }></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topics' component={Topics}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    )
  }
}