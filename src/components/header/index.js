import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../Utils/Utils'
import axios from '../../axios'

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
  // http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
  getWeatherApiData () {
    let city = '北京'
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

  render () {
    return (
      <div className="header">
        <Row className="header_top">
          <Col span={24}>
            <span>Welcome, {this.state.userName}</span>
            <span>退出</span>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb_title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather_img">
              <img src={this.state.dayPictureUrl} alt=""/>
            </span>
            <span className="weather_detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}