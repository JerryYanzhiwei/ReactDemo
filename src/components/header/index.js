import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../Utils/Utils'

export default class Header extends React.Component {
  state = {}
  componentWillMount () {
    this.setState({
      userName: 'Jerry'
    })
    setInterval(() => {
      let sysTime = Util.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherApiData()
  }

  getWeatherApiData () {
    
  }

  render () {
    return (
      <div className="header">
        <Row className="header_top">
          <Col span={24}>
            <span>Welcome, {this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb_title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather_detail">晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}