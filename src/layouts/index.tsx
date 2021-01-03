import React from 'react';
import { IRouteComponentProps } from 'umi'
import styles from './index.less';

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
  console.log("testing ...")
  return (
    <div>
      <h1 className={styles.container}>Layout Index</h1>
      <div>{ children }</div>
    </div>
  );
}

// // 全局布局文件
// import React from 'react'
// import { IRouteComponentProps } from 'umi'
// export default function ({ children, location, route, history, match }: IRouteComponentProps) {
//   return (
//     <>
//       <div>Layout Page</div>
//       <div>{ children }</div>
//     </>
//   )
// }

