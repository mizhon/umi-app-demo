import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
import { withRouter } from 'umi'
import BaseLayout from './BaseLayout'

interface LayoutProps {}
interface LayoutState {}
class Layout extends Component<any> {
  state = {
    name: 'layout'
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps: LayoutProps, nextState: LayoutState) {
    console.log(nextProps, nextState)
    return true
  }

  render() {
    console.log('layout index -->', this.props, this.state);
    const { children } = this.props

    return (
      <ConfigProvider>
        <BaseLayout>{children}</BaseLayout>
      </ConfigProvider>
    );
  }
}

export default withRouter(Layout)
