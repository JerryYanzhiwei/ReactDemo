import React from 'react'

import { Card, Spin, Icon, Alert } from 'antd'

import '../index.less'

export default class Loading extends React.Component {
  
  render () {
    // 自定义静态图标无法旋转
    const icon = <Icon type="loading" style={{fontSize: 24}}/>
    const icon_loading = <Icon type="loading" style={{fontSize: 24}}/>
    return (
      <div>
        <Card title="loading的用法" className="card_wrap">
          <Spin size="small"/>
          <Spin style={{margin: '0 10px'}}/>
          <Spin size="large"/>
          <Spin spinning={true} style={{margin: '0 10px'}} indicator={icon}/>
        </Card>
        <Card title="内容loading" className="card_wrap">
          <Alert
            message="React"
            description='learning'
            type="info"
          />
          <Spin
            tip="加载中..."
            indicator={icon_loading}
          >
            <Alert
              message="React"
              description='learning'
              type="warning"
            />
          </Spin>
          <Spin
            tip="加载中..."
          >
            <Alert
              message="React"
              description='learning'
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}