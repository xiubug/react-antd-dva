/**
 * 我们为了统一方便的管理路由和页面的关系，将配置信息统一抽离到 common/nav.js 下，同时应用动态路由
 */

import dynamic from 'dva/dynamic';

// dynamic包装 函数
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页',
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: 'dashboard',
        children: [
          {
            name: '分析页',
            path: 'analysis',
            component: dynamicWrapper(app, [], () => import('../routes/Dashboard/Analysis')),
          },
          {
            name: '监控页',
            path: 'monitor',
            component: dynamicWrapper(app, [], () => import('../routes/Dashboard/Monitor')),
          },
          {
            name: '工作台',
            path: 'workplace',
            component: dynamicWrapper(app, [], () => import('../routes/Dashboard/Workplace')),
          },
        ],
      },
      {
        name: '表单页',
        path: 'form',
        icon: 'form',
        children: [
          {
            name: '基础表单',
            path: 'basic-form',
            component: dynamicWrapper(app, [], () => import('../routes/Forms/BasicForm')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '账户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          },
        ],
      },
    ],
  },
];
