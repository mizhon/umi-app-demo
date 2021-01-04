import React, { PureComponent } from 'react'
import { Form } from 'antd'
import styles from './index.less'
import { settings } from '@/utils/settings'

class Login extends PureComponent {
  render() {

    return (
      <>
        <div className={styles.form}>
          <div className={styles.logo}>
            {/* <img alt="logo" src={settings.logoPath} /> */}
            <span>{settings.siteName}</span>
          </div>
        </div>
        <Form>

        </Form>
      </>
    )
  }
}

export default Login