import React from 'react'

import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane

export default class Tab extends React.Component {
  componentWillMount () {
    const panes = [
      {
        title: 'tab1',
        content: 'tab1',
        key: 1
      },
      {
        title: 'tab2',
        content: 'tab2',
        key: 2
      },
      {
        title: 'tab3',
        content: 'tab3',
        key: 3
      }
    ]
    this.setState({
      panes
    })
  }
  callback = (key) => {
    message.info('您点击了' + key)
  }
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  render () {
    return (
      <div>
        <Card title="Tab页签" className="card_warp">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="tab1" key="1">Content of Tab pane page 1</TabPane>
            <TabPane tab="tab2" key="2" disabled>Content of Tab pane page 2</TabPane>
            <TabPane tab="tab3" key="3">Content of Tab pane page 3</TabPane>
          </Tabs>
        </Card>
        <Card title="左侧页签" className="card_warp">
          <Tabs tabPosition="left" defaultActiveKey="全部">
            <TabPane tab="全部" key="全部">全部列表</TabPane>
            <TabPane tab="进行中" key="进行中">进行中</TabPane>
            <TabPane tab="已完成" key="已完成">已完成</TabPane>
          </Tabs>
        </Card>
        <Card title="带图标的页签" className="card_warp">
          <Tabs defaultActiveKey="全部">
            <TabPane tab={<span><Icon type="plus"/>Tab1</span>} key="全部">全部列表</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab2</span>} key="进行中">删除</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab3</span>} key="已完成">编辑</TabPane>
          </Tabs>
        </Card>
        <Card title="可添加删除的页签">
          <Tabs type="editable-card" onChange={this.onChange} activeKey={this.state.activeKey}>
            {
              this.state.panes.map((item) => {
                return <TabPane
                  tab={item.title}
                  key={item.key}
                >
                  {item.content}
                </TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}