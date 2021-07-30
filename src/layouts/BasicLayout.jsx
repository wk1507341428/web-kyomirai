import React from 'react';
import { connect } from 'umi';
import NProgress from 'nprogress';

let currHref = '';

const BasicLayout = props => {
  const { children, loading } = props;

  const { href } = window.location;

  if (currHref !== href) {
    NProgress.start(); // 页面开始加载时调用 start 方法
    if (!loading.global) {
      NProgress.done(); // 页面请求完毕时调用 done 方法'
      currHref = href;
    }
  }

  return <>{children}</>;
}

export default connect(({ loading }) => ({
  loading,
}))(BasicLayout);