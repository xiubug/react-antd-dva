import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import cloneDeep from 'lodash/cloneDeep';
import Store from 'store';
import { getNavData } from './common/nav';
import { getPlainNode } from './utils/utils';

import styles from './index.less';
import Config from './common/config';

// 设置默认的加载组件
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function getRouteData(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(route.children);
  return nodeList;
}

function getLayout(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = navData.filter(item => item.layout === path)[0];
  return {
    component: route.component,
    layout: route.layout,
    name: route.name,
    path: route.path,
  };
}

// 登录验证
function requireAuth(Layout, props, passProps) {
  // 模拟token失效时间
  const token = Store.get(Config.USER_TOKEN);
  const current = (new Date()).getTime();
  if (token && current - token < 7200000) {
    return <Layout {...props} {...passProps} />;
  } else {
    return <Redirect to="/user/login" />;
  }
}

function RouterConfig({ history, app }) {
  const navData = getNavData(app);
  const UserLayout = getLayout(navData, 'UserLayout').component;
  const BasicLayout = getLayout(navData, 'BasicLayout').component;
  const passProps = {
    app,
    navData: navData.filter((item) => {
      return item.layout !== 'UserLayout';
    }), // 剔除掉无需登录模块
    getRouteData: (path) => {
      return getRouteData(navData, path);
    },
  };
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/user" render={props => <UserLayout {...props} {...passProps} />} />
          <Route path="/" render={props => requireAuth(BasicLayout, props, passProps)} />
          <Redirect exact from="/" to="/dashboard/analysis" />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
