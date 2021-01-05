import React, { PureComponent } from 'react'
import { withRouter } from 'umi'
// 从dva中导入connect
import { connect } from 'dva'
import NProgress from 'nprogress'
import PublicLayout from './PublicLayout'
import PrimaryLayout from './PrimaryLayout'
import styles from './BaseLayout.less'

import * as settings from '../utils/settings'

const LayoutMap = {
  primary: PrimaryLayout, // 登录时的页面
  public: PublicLayout, // 未登录时的页面
}
class BaseLayout extends PureComponent<any> {
  previousPath = ''
  render() {
    const { loading, children, location } = this.props
    // 根据配置文件和location的path路径名确认Container
    const Container = LayoutMap['public']
    const currentPath = location.name + location.search
    console.log('-->loading: ', loading)
    if (currentPath !== this.previousPath) {
      NProgress.start()
    }
    return (
      <>
        <Container>{children}</Container>
      </>
    );
  }
}

export default withRouter(BaseLayout)
