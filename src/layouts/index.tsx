import React from 'react';
import { withRouter, IRouteComponentProps } from 'umi';
import styles from './index.less';

export default ({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) => {
  console.log('testing ...');
  return (
    <div>
      <h1 className={styles.container}>Layout Index</h1>
      <div>{children}</div>
    </div>
  );
};
