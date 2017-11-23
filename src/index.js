// 用于解决es6语法不支持的情况
import 'babel-polyfill';
import dva from 'dva';
import { browserHistory } from 'dva/router';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import router from './router'
import registerServiceWorker from './registerServiceWorker';

const app = dva({
    history: browserHistory
});

// 2. 配置 hooks 或者注册插件。（插件最终返回的是 hooks ）
// app.use({});

// 3. Register global model
app.model(require('./models/global'));

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

