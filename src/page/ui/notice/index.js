import React from 'react'

import { Card, Button, notification } from 'antd'

import '../index.less'

export default class Notice extends React.Component {

  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: '这是message',
      description: '这是通知的内容区域',
      
    })
  }
  render () {
    return (
      <div>
        <Card title="通知提醒" className="card_warp">
          <Button onClick={() => this.openNotification('success', 'topLeft')} type="primary">
            普通通知
          </Button>
          <Button onClick={() => this.openNotification('info', 'topRight')} type="primary">
            Info
          </Button>
          <Button onClick={() => this.openNotification('warning', 'bottomLeft')} type="primary">
            warn
          </Button>
          <Button onClick={() => this.openNotification('error', 'bottomRight')} type="primary">
            Error
          </Button>
        </Card>
      </div>
    )
  }
}