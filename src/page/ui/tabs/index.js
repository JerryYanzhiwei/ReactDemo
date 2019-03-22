import React from 'react'

import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane

export default class Tab extends React.Component {
  constructor (props) {
    super()
    this.newIndex = 0
    const panes = [
      {
        title: 'tab1',
        content: 'tab1',
        key: '1'
      },
      {
        title: 'tab2',
        content: 'tab2',
        key: '2'
      },
      {
        title: 'tab3',
        content: 'tab3',
        key: '3'
      }
    ]
    this.state = {
      activeKey: panes[0].key,
      panes,
      newIndex: 0
    }
  }
  callback = (key) => {
    message.info('您点击了' + key)
  }
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  
  edit = (targetKey, action) => {
    this[action](targetKey)
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey)
    console.log(targetKey, activeKey)
    if (panes.length && targetKey === activeKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({
      activeKey,
      panes
    })
  }

  add = () => {
    const panes = this.state.panes
    const activeKey = `newTab${this.newIndex++}`
    panes.push({title: `newTab${this.newIndex}`, content: `newTab${this.newIndex}`, key: activeKey})
    this.setState({
      panes,
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
          <Tabs
            onChange={this.onChange}
            type="editable-card"
            activeKey={this.state.activeKey}
            onEdit={this.edit}
          >
            {
              this.state.panes.map((items) => {
                return <TabPane
                  key={items.key}
                  tab={items.title}
                >
                  {items.content}
                </TabPane>
              })
            }

          </Tabs>
        </Card>
      </div>
    )
  }
}