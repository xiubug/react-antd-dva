# react-antd-dva

基于react + ant-design + dva + Mock 企业级后台管理系统最佳实践

## 特性

- :gem: **优雅美观**：基于 Ant Design 体系精心设计
- :rocket: **最新技术栈**：使用 React/dva/antd 等前端前沿技术开发
- :1234: **Mock 数据**：实用的本地数据调试方案

## 模板

```
- 帐户
  - 登录
  - 注册
  - 注册成功
```

## 使用

```bash
$ git clone https://github.com/sosout/react-antd-dva.git
$ cd react-antd-dva
$ npm install
$ npm start         # 访问 http://localhost:8888
```

## 兼容性

现代浏览器及 IE11。


## dva用法

### dynamic

解决组件动态加载问题的 util 方法，基于 react-async-component 实现。比如：

```javascript
import dynamic from 'dva/dynamic';

const UserPageComponent = dynamic({
  app,
  models: () => [
    import('./models/users'),
  ],
  component: () => import('./routes/UserPage'),
});
```

