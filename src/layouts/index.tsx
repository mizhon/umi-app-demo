import React from 'react';
import { IRouteComponentProps } from 'umi'
import styles from './index.less'

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
  console.log("testing ...", location, route)
  if (location.pathname === '/login') {
    return (
      <>
        <h2>login page here ...</h2>
        <div>{ children }</div>
      </>
    )
  }

  return (
    <>
      <h1 className={styles.container}>Layout Index</h1>
      <div>{ children }</div>
    </>
  );
}

