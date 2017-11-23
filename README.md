# react-antd-dva

## react中使用dva

### 初始化dva

```javascript
import dva from 'dva';
import { browserHistory } from 'dva/router';
import './index.less';
import router from './router';

// 1. Initialize
const app = dva({
  history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Register global model
app.model(require('./models/global'));

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
```
