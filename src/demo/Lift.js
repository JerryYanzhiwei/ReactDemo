import React from 'react'
import { Button } from 'antd'
import './style.less'

class Life extends React.Component {
  render() {
    return (
      <div className="container">
        <Button>点击一下</Button>
        <p className="title">我是标题</p>
      </div>
    )
  }
}

export default Life