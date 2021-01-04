import React from 'react';
// import { I18nProvider } from '@lingui/react'
import { withRouter } from 'umi';
import { ConfigProvider } from 'antd';

class Layout extends React.Component<any> {
  render() {
    return (
      <ConfigProvider>
        {/* <I18nProvider language={language} catalogs={catalogs}>
        </I18nProvider> */}
      </ConfigProvider>
    );
  }
}

export default withRouter(Layout);
