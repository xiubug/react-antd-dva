/**
 * Auth: zzh
 * Desc: dva 官网demo
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { notification } from 'antd';
import './DvaDemo.less';
import ProductList from './ProductList';

@connect(
  state => ({
    products: state.products,
  })
)
export default class DvaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
  }

  handleAdd = () => {
    if (!this.state.inputValue) {
      notification.error({
        message: '姓名不能为空',
      });
      return;
    }
    const param = {
      name: this.state.inputValue,
      id: this.props.products.length + 1,
    };
    this.props.dispatch({
      type: 'products/addProduct',
      payload: { ...param },
    });
  };

  handleDelete = (id) => {
    if (this.props.products.length === 1) {
      notification.error({
        message: '删除失败',
        description: '至少有一条product！',
      });
      return;
    }
    this.props.dispatch({
      type: 'products/deleteProductById',
      payload: id,
    });
  };

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ inputValue: e.target.value })} placeholder="请输入name" />
        <button onClick={this.handleAdd}>Add</button>
        <h2 className="text-red">Dva Demo! ProductList!</h2>
        <ProductList onDelete={this.handleDelete} products={this.props.products} />
      </div>
    );
  }
}
