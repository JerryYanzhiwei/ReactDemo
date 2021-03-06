import React from 'react'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {
  
  render () {
    return (
        <div>
          <ul>
            <li>
              <Link to="/">First</Link>
            </li>
            <li>
              <Link to="/main">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
            <li>
              <Link to="/jerry">Jerry</Link>
            </li>
          </ul>
          <hr/>
          {this.props.children}
        </div>
    )
  }
}