import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Main from './main'
import About from './about'
import Topics from './topics'

export default class Home extends React.Component {
  
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topics' component={Topics}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}