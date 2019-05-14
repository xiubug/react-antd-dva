export default {
  namespace: 'products',

  state: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],

  effects: {},

  reducers: {
    deleteProductById(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
