import React, { Component } from 'react';
import { withRouter } from 'umi';

import PublicLayout from './PublicLayout';
import PrimaryLayout from './PrimaryLayout';
import styles from './BaseLayout.less';

const LayoutMap = {
  primary: PrimaryLayout, // 登录时的页面
  public: PublicLayout, // 未登录时的页面
};

class BaseLayout extends Component<any> {
  render() {
    return <>BaseLayout</>;
  }
}

export default withRouter(BaseLayout);
