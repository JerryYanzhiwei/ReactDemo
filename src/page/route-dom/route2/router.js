import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from './main'
import About from './../route1/about'
import Topics from './../route1/topics'
import Home from './home'
export default class IRoute extends React.Component {
  render () {
    return (
      <Router>
        <Home>
          <Route path='/main' render={ () =>
            <Main>
              <Route path='/main/a' component={About}></Route>
            </Main>
          }></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topics' component={Topics}></Route>
        </Home>
      </Router>
    )
  }
}