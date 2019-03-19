import React from 'react'

import { Card, Modal, Button } from 'antd'
import './index.less'

export default class Model extends React.Component {

  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleShowModal = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleShowConfirm = (type) => {
    let _this = this
    Modal.confirm({
      title: '确认',
      content: '确认删除吗',
      onOk () {
        _this.setState({
          showModal1: true
        })
      }
    })
  }
  render () {
    return (
      <div className="modal_contain">
        <Modal
          title="普通弹框"
          visible={this.state.showModal1}
          onOk={this.handleCloseBasicModal}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>Learning React</p> 
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.showModal2}
          onText="好的"
          cancelText="算了"
          onCancel={ () => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>Learning React</p> 
        </Modal>
        <Modal
          style={{top: 20}}
          title="顶部20px"
          visible={this.state.showModal3}
          onCancel={ () => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>Learning React</p>
        </Modal>
        <Card className='card_wrap' title="基础模态框" style={{textAlign: 'left'}}>
          <Button type="primary" onClick={() => this.handleShowModal('showModal1')}>basic modal</Button>
          <Button type="primary" onClick={() => this.handleShowModal('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleShowModal('showModal3')}>顶部20px弹框</Button>
        </Card> 
        <Card className='card_wrap' title="信息确认框" style={{textAlign: 'left'}}>
          <Button type="primary" onClick={() => this.handleShowConfirm('showModal1')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleShowConfirm('showModal2')}>Info</Button>
          <Button type="primary" onClick={() => this.handleShowConfirm('showModal3')}>Success</Button>
          <Button type="primary" onClick={() => this.handleShowConfirm('showModal3')}>Wraning</Button>
        </Card> 
      </div>
    )
  }
}