import { routerRedux } from 'dva/router';
import { signOut } from '../services/api';

export default {
  namespace: 'products',

  state: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],

  effects: {
    *logout(_, { call, put }) {
      const response = yield call(signOut);
      if (response) {
        yield put(routerRedux.push('/user/login'));
      }
    },
  },

  reducers: {
    deleteProductById(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
