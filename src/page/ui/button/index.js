import React from 'react'

import { Card, Button, Icon, Radio } from 'antd'
import './index.less' 

export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }
  handleCloseLoading () {
    this.setState({
      loading: !this.state.loading
    })
  }
  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      size: e.target.value
    })
  }
  render () {
    return (
      <div className="button_ui">
        <Card title="基础按钮" style={{textAlign: 'left'}}>
          <Button type="primary">Jerry</Button>
          <Button>Jerry</Button>
          <Button type="dashed">Jerry</Button>
          <Button type="danger">Jerry</Button>
          <Button disabled>Jerry</Button>
        </Card>
        <Card title="圆形按钮" style={{textAlign: 'left'}}>
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮" style={{textAlign: 'left'}}>
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle"></Button>
          <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>关闭</Button>
        </Card>
        <Card title="按钮组" style={{textAlign: 'left'}}>
          <Button.Group>
            <Button type="primary">
              <Icon type="left"/>返回
            </Button>
            <Button type="primary">
              前进<Icon type="right"/>
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" style={{textAlign: 'left'}}>
          <Radio.Group defaultValue={this.state.value} onChange={this.handleChange.bind(this)}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button size={this.state.size} type="primary">Jerry</Button>
          <Button size={this.state.size}>Jerry</Button>
          <Button size={this.state.size} type="dashed">Jerry</Button>
          <Button size={this.state.size} type="danger">Jerry</Button>
        </Card>
      </div>
    )
  }
}