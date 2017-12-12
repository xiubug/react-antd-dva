import Store from 'store';
import request from '../utils/request';

// 用户登录
export async function signIn(params) {
  return request('/user/login', {
    method: 'POST',
    body: params,
  });
}

// 用户退出了
export async function signOut() {
  // 清除TOKEN，模拟退出
  Store.clearAll();
  return true;
}

